class DataStrategy {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    configDataSource(dataSource) {
        this.dataSource = dataSource;
    }
    getDataSource() {
        return this.dataSource;
    }
}

export default DataStrategy;
