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
import mongoose from 'mongoose';
import passport from 'passport';
import User from '../models/User.js';
export const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport.authenticate('local', (err, user) => {
        if (err)
            throw err;
        if (!user)
            res.send('No User Exists');
        req.logIn(user, (err) => {
            if (err)
                throw err;
            res.send('Successfully Authenticated');
            console.log(req.user);
        });
    })(req, res, next);
});
export const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, email, password } = req.body;
    User.findOne({ email }, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            throw err;
        if (user)
            res.send('User Already Exists');
        if (!user) {
            const hashedPassword = yield bcrypt.hash(password, 10);
            const newUser = new User({
                name: `${firstName} ${lastName}`,
                userName,
                email,
                password: hashedPassword,
            });
            // const token = jwt.sign(
            //   { email: newUser.email, id: newUser._id },
            //   process.env['SECRET_TOKEN'],
            //   { expiresIn: '1h' }
            // );
            yield newUser.save();
            res.send('User Created');
        }
    }));
});
export const fetchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: userId } = req.params;
        const singleUser = yield User.findById({ userId });
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(404).send({ data: `No user with ID: ${userId}` });
        }
        console.log(singleUser);
        return res.status(200).json(singleUser);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
export const getUser = (req, res) => {
    res.send(req.user);
};
