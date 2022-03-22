import "dotenv/config";
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import connectDB from './db/connect'
// importy routes

const app = express();

// middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// routes

// inicjalizacja serwera

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(PORT);
        console.log(`Server is running on port: ${PORT}...`);
    } catch (error) {
        console.log(error)
    }
}

start()

