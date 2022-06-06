var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connectDB from './db/connect.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import passportConfig from "./config/passportConfig.js";
const app = express();
app.use(bodyParser.json({
    limit: '100mb',
}));
app.use(bodyParser.text({
    limit: '100mb',
}));
app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 1000000,
}));
app.use(cors({
    origin: process.env['ORIGIN_URL'] || 'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser());
app.use(passport.initialize());
passportConfig(passport);
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello to Memes API');
});
const PORT = process.env['PORT'] || 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB();
        app.listen(PORT);
        console.log(`Server is running on port: ${PORT}...`);
    }
    catch (error) {
        console.log(error);
    }
});
start();
3;
