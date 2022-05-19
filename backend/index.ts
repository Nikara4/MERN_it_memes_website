import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import bodyParser from 'body-parser';

import connectDB from './db/connect.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import passportConfig from "./passportConfig.js";

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
app.use(
  session({
    secret: process.env['SESSION_CODE'],
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env['SESSION_CODE']));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello to Memes API');
});

const PORT = process.env['PORT'] || 5000;
const mongoDB: string = process.env['MONGO_URI'];

const start = async () => {
  try {
    await connectDB(mongoDB);
    app.listen(PORT);
    console.log(`Server is running on port: ${PORT}...`);
  } catch (error) {
    console.log(error);
  }
};

start();
