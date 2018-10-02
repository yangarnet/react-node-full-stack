import express from 'express';
import ProductController from '../../controllers/productController';
import DataSource from '../../datasource/dataSource';
import {
    resolve
} from 'url';

const productRoutes = () => {
    const productRoute = express.Router();
    const productCtrl = new ProductController(DataSource.getDsInstance().getDataSource());

    productRoute.get('/total', (req, res) => productCtrl.getProductTotal(req, res));
    productRoute.get('/page-num/:pagenum/page-size/:pagesize', (req, res) => productCtrl.getProductPagination(req, res));

    return productRoute;
};

export default productRoutes;
