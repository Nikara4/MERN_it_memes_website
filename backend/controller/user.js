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
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const signIn = (req, res) => {
    const { userName, password } = req.body;
    User.findOne({ userName }).then((user) => {
        if (!user) {
            return res.status(401).send({
                success: false,
                message: 'No user exists with the provided credentials.',
            });
        }
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect)
            res.status(401).json({ success: false, message: 'Invalid credentials.' });
        const token = jwt.sign({ userName: user.userName, id: user._id }, process.env['SECRET_TOKEN'], { expiresIn: '1h' });
        return res.status(200).send({
            success: true,
            message: 'Logged in successfully!',
            token: 'Bearer ' + token,
            user: user,
        });
    });
};
export const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, email, password, confirmPassword } = req.body;
    try {
        const existingUser = yield User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                message: 'A user with this username already exists. Please choose different username.',
            });
        if (password !== confirmPassword)
            return res.status(400).json({
                message: 'Passwords do not match. Please make sure your password is the same in both fields.',
            });
        const hashedPassword = yield bcrypt.hash(password, 10);
        const newUser = yield User.create({
            name: `${firstName} ${lastName}`,
            userName,
            email,
            password: hashedPassword,
        });
        return res.status(200).send({
            success: true,
            message: 'User created successfully.',
            user: newUser,
        });
    }
    catch (err) {
        return res.status(400).send({
            success: false,
            message: 'Something went wrong, please try again.',
            error: err,
        });
    }
});
// export const authUser = (req: Request, res: Response) => {
//   res.status(200).json({
//     success: true,
//     msg: 'You are successfully authenticated to this route!',
//     user: req.user
//   });
// };
// for profile page implementation
// export const fetchSingleUser = async (req: Request, res: Response) => {
//   try {
//     const { userName } = req.body;
//     const user = await User.findById({userName});
//     if (!mongoose.Types.ObjectId.isValid(userName)) {
//       return res.status(200).send({ data: `No post with User Name: ${userName}` });
//     }
//     return res.status(200).json(user);
//   } catch (error) {
//     return null;
//   }
// };
export const signOut = (req, res) => {
    req.logout();
    res.send('success');
};
