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
export const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const existingUser = yield User.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: 'User does not exist.' });
        const isPasswordCorrect = yield bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            return res.status(400).json({ message: 'Invalid credentials.' });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env['SECRET_TOKEN'], { expiresIn: '1h' });
        return res.status(200).json({ result: existingUser, token });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
export const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, email, password, confirmPassword } = req.body;
    try {
        const existingUser = yield User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: 'User already exists.' });
        if (password !== confirmPassword)
            return res.status(400).json({ message: 'Passwords do not match' });
        const hashedPassword = yield bcrypt.hash(password, 12);
        const result = yield User.create({
            email,
            password: hashedPassword,
            userName,
            name: `${firstName} ${lastName}`,
        });
        const token = jwt.sign({ email: result.email, id: result._id }, process.env['SECRET_TOKEN'], { expiresIn: '1h' });
        return res.status(200).json({ result, token });
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
