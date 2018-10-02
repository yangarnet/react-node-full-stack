import request from 'supertest';
import {
    expect
} from 'chai';
import app from './app';


describe('Express Json API server', () => {
    it('the server should be running', done => {
        request(app).get('/')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body).to.be.not.null;
                expect(res.body.data).to.be.eq('hello json api')
                done();
            });
    });

    it('get Product JSON response', done => {
        request(app).get('/api/product/page-num/2/page-size/5')
                    .expect(200)
                    .end((err, res)=> {
                        expect(res.body).to.be.not.null;
                        const { currentPage, total, totalPages, perPage, nextPage, products } = res.body;
                        expect(currentPage).to.be.eq(2);
                        expect(total).to.be.eq(1000);
                        expect(totalPages).to.be.eq(200);
                        expect(products.length).to.be.eq(5);
                        done();
                        if(err) {
                            done(err);
                        }
                    });
    });
});
