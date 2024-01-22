import 'dotenv/config';
import express from 'express';
import main from './routes/main.route';
import mongoose from 'mongoose';
const port: string = process.env.PORT || '4000';

(async () => {
    try {
        const app = express();
        app.use(express.json());
        await mongoose.connect(process.env.BASE_URL || "");
        console.log("mongodb is connected");
        app.use('/api', main);
        app.listen(port, () => console.log(`Server connected with ${port}`));
    } catch (error) {
        console.error(error);
    }
})();