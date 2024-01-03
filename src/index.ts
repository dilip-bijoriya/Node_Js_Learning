import express from 'express';
import main from './routes/main.route';
const port = 4000;

(async () => {
    try {
        const app = express();
        app.use(express.json());
        app.use('/api', main);
        app.listen(port, () => console.log(`Server connected with ${port}`));
    } catch (error) {
        console.error(error);
    }
})();