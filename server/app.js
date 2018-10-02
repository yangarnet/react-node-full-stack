import express from 'express';
import configEnv from './config/configEnv';
import configMidware from './middleware/configMiddleware';
import configRoutes from './routes/configRoutes';

const app = express();
configEnv();
configMidware(app);
configRoutes(app);

app.get('/', (req, res) => {
    res.json({
        data: 'hello json api'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`node server running @ ${process.env.PORT}`);
});

export default app;
