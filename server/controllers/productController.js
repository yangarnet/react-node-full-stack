class ProductController {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    getProductTotal(req, res) {
        res.status(200).json({
            total: this.dataSource.get().length
        });
    }

    getProductPagination(req, res) {
        const { pagenum, pagesize } = req.params;

        res.status(200).json(this.dataSource.getPagination(parseInt(pagenum, 10), parseInt(pagesize, 10)));
    }
}

export default ProductController;
