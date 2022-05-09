var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "dotenv/config";
import express from 'express';
import cors from 'cors';
import connectDB from './db/connect.js';
import postRoutes from './routes/posts.js';
// importy routes
const app = express();
// middleware
app.use(express.json({
    limit: '100mb'
}));
app.use(express.text({
    limit: '100mb',
}));
app.use(express.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 1000000
}));
app.use(cors());
// routes
app.use('/posts', postRoutes);
app.get("/", (req, res) => {
    res.send("Hello to Memes API");
});
// app.use(errorHandlerMiddleware);
// inicjalizacja serwera
const PORT = process.env["PORT"] || 5000;
const mongoDB = process.env["MONGO_URI"];
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB(mongoDB);
        app.listen(PORT);
        console.log(`Server is running on port: ${PORT}...`);
    }
    catch (error) {
        console.log(error);
    }
});
start();
