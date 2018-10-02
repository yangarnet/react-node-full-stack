const isEmpty = obj => {
    return (
        obj === undefined ||
        obj === null ||
        (typeof obj === 'object' && Object.keys(obj).length === 0) ||
        (typeof obj === 'string' && obj.trim().length === 0) ||
        (Array.isArray(obj) && obj.length === 0)
    );
};

export const processImage = image => {
    const domain = 'http://dummyimage.com/';
    const imgFullPath = image.replace(domain, '');
    const imageDot = imgFullPath.indexOf('.');
    return `${domain}/307x328${imgFullPath.slice(imageDot)}&text=Product+Image`;
};

export const processJsonFeed = feeds => {
    let result = [];
    try {
        if (!isEmpty(feeds) && !isEmpty(feeds.products)) {
            result = feeds && feeds.products && feeds.products.reduce((acc, product) => {
                acc.push({
                    productId: product.id,
                    productPrice: product.price,
                    productName: `${product.product_name.slice(0, 10)}...`,
                    productDescription: `${product.description.slice(0, 15)}...`,
                    productImage: processImage(product.product_image)
                });
                return acc;
            }, []);
        }

    } catch (err) {
        throw err;
    } finally {
        return result;
    }
};

export const paginator = (items, pageNum = 1, pageSize = 8) => {
    pageNum = pageNum >= 1 ? pageNum : 1;
    pageSize = pageSize >= 1 ? pageSize : 1;
    const offset = (pageNum - 1) * pageSize;
    const productList = processJsonFeed(items);
    const paginatedItems = productList.slice(offset).slice(0, pageSize);
    const total_pages = Math.ceil(productList.length / pageSize);

    return {
        currentPage: pageNum,
        perPage: pageSize,
        prePage: pageNum - 1 ? pageNum - 1 : null,
        nextPage: total_pages > pageNum ? parseInt(pageNum, 10) + 1 : null,
        total: productList.length,
        totalPages: total_pages,
        productCount: paginatedItems.length,
        products: paginatedItems
    };
};
