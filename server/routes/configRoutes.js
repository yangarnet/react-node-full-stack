import productRoutes from './api/product';

const configRoutes = (app) => {
    app.use('/api/product', productRoutes());
};

export default configRoutes;
