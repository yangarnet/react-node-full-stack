import DataStrategy from './DataStrategy';

const DataSource = (() => {
    let dataSource;

    const createDataSource = () => {
        dataSource = new DataStrategy();
        return dataSource
    };

    return {
        getDsInstance: () => {
            if (!dataSource) {
                return createDataSource();
            }
            return dataSource;
        }
    }
})();

export default DataSource;
