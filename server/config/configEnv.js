import settings from './settings.json';
import DataSource from '../datasource/dataSource';
import JsonFeeds from '../datasource/json/jsonFeed';


const configEnv = () => {
    const currentEnvName = process.env.NODE_ENV || 'development';
    const currentEnv = settings[currentEnvName];
    if (currentEnv) {
        Object.keys(currentEnv).forEach(
            key => (process.env[key] = currentEnv[key])
        );
    }

    const dataSourceHandle = {
        "JSON": new JsonFeeds()
    };
    const dataSource = DataSource.getDsInstance();

    dataSource.configDataSource(dataSourceHandle[process.env.DATA_SOURCE]);

};

export default configEnv;
