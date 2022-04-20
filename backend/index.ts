import "dotenv/config";
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import connectDB from './db/connect';
import postRoutes from './routes/posts.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';
// importy routes

const app = express();

// middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
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

