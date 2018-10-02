import products from './products.json';
import {
    processJsonFeed,
    paginator
} from '../../utils/helper';

class JsonFeeds {

    get() {
        return processJsonFeed(products);
    }

    getPagination(pageNum, pageSize) {
        return paginator(products, pageNum, pageSize);
    }

}

export default JsonFeeds;
