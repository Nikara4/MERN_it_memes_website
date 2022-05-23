import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
  _id?: string;
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
},
  userName: {
    type: String,
    unique: true,
    required: true,
},
  email: {
    type: String,
    unique: true,
    required: true,
},
  password: {
    type: String,
    required: true,
},
});

export default mongoose.model('User', userSchema);
