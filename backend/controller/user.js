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
import passport from 'passport';
import User from '../models/User.js';
export const signIn = (req, res, next) => {
    const { userName, password } = req.body;
    passport.authenticate('local', (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            throw err;
        const existingUser = yield User.findOne({ userName });
        if (!existingUser)
            res.status(404).json({ message: 'No user exists with the provided credentials.' });
        const isPasswordCorrect = yield bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            res.status(400).json({ message: 'Invalid credentials.' });
        const token = jwt.sign({ userName: existingUser.userName, id: existingUser._id }, process.env['SECRET_TOKEN'], { expiresIn: '1h' });
        req.logIn(existingUser, (err) => {
            if (err)
                throw err;
            res.status(200).json({ result: existingUser, token });
        });
    }))(req, res, next);
};
export const signUp = (req, res) => {
    const { firstName, lastName, userName, email, password, confirmPassword } = req.body;
    User.findOne({ userName }, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            throw err;
        if (user)
            res.status(400).json({ message: 'User already exists.' });
        if (password !== confirmPassword)
            return res.status(400).json({ message: 'Passwords do not match' });
        const hashedPassword = yield bcrypt.hash(password, 10);
        const newUser = yield User.create({
            name: `${firstName} ${lastName}`,
            userName,
            email,
            password: hashedPassword,
        });
        const token = jwt.sign({ userName: newUser.userName, id: newUser._id }, process.env['SECRET_TOKEN'], { expiresIn: '1h' });
        return res.status(200).json({ newUser, token });
    }));
};
export const fetchUser = (req, res) => {
    res.send(req.user);
};
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
export const signOut = ((req, res) => {
    req.logout();
    res.send("success");
});
