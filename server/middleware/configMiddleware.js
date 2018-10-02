import bodyParse from 'body-parser';

const configMidware = app => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({
        extended: true
    }));
};

export default configMidware;
