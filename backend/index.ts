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

app.use(
  bodyParser.json({
    limit: '100mb',
  })
);
app.use(
  bodyParser.text({
    limit: '100mb',
  })
);
app.use(
  bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 1000000,
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
passportConfig(passport);

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello to Memes API');
});

const PORT = process.env['PORT'] || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Server is running on port: ${PORT}...`);
  } catch (error) {
    console.log(error);
  }
};

start();
