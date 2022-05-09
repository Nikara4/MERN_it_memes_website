import "dotenv/config";
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import connectDB from './db/connect.js';
import postRoutes from './routes/posts.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';
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
}))
app.use(cors());

// routes

app.use('/posts', postRoutes);

app.get("/", (req, res) => {
    res.send("Hello to Memes API");
  });

// app.use(errorHandlerMiddleware);

// inicjalizacja serwera

const PORT = process.env["PORT"] || 5000;
const mongoDB: string = process.env["MONGO_URI"]

const start = async () => {
    try {
        await connectDB(mongoDB);
        app.listen(PORT);
        console.log(`Server is running on port: ${PORT}...`);
    } catch (error) {
        console.log(error)
    }
}

start();

