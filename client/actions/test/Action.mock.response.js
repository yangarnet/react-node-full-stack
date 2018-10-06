export const fetchProductSuccess = () => {
    return {
        currentPage: 2,
        perPage: 5,
        prePage: 1,
        nextPage: 3,
        total: 30,
        totalPages: 50,
        productCount: 10,
        products: [
            {
                productId: 10,
                productPrice: '$12.92',
                productName: 'Rasuvo',
                productDescription: 'implement clicks-and-mortar infrastructures',
                productImage: 'http://dummyimage.com/304x322.jpg/ff4444/ffffff'
            },
            {
                productId: 11,
                productPrice: '$78.81',
                productName: 'PAXIL',
                productDescription: 'implement back-end deliverables',
                productImage: 'http://dummyimage.com/350x305.bmp/dddddd/000000'
            },
            {
                productId: 12,
                productPrice: '$72.76',
                productName: 'Clean Choice Alcohol Sanitizer',
                productDescription: 'brand transparent portals',
                productImage: 'http://dummyimage.com/329x314.png/ff4444/ffffff'
            },
            {
                productId: 13,
                productPrice: '$67.38',
                productName: 'Topiramate',
                productDescription: 'mesh visionary initiatives',
                productImage: 'http://dummyimage.com/313x300.bmp/cc0000/ffffff'
            },
            {
                productId: 14,
                productPrice: '$34.68',
                productName: 'Lentil',
                productDescription: 'extend B2B ROI',
                productImage: 'http://dummyimage.com/310x310.bmp/5fa2dd/ffffff'
            }
        ]
    };
};

export const fetchProductFailure = () => {
    return {
        currentPage: 1,
        perPage: null,
        prePage: 8,
        nextPage: null,
        total: null,
        totalPages: null,
        productCount: null,
        products: []
    };
};
