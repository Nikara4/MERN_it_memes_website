import mongoose from 'mongoose';
import 'dotenv/config';

const mongoDB: string = process.env['MONGO_URI'];

export default () => {
    return mongoose.connect(mongoDB)
}