import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.model('User', userSchema);
