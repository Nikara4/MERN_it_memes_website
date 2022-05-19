var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from './models/User.js';
import bcrypt from 'bcryptjs';
import passportLocal from 'passport-local';
const localStrategy = passportLocal.Strategy;
export default (passport) => {
    passport.use(new localStrategy((email, password, done) => {
        User.findOne({ email }, (err, user) => {
            if (err)
                throw err;
            if (!user)
                return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
                if (err)
                    throw err;
                if (result === true) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            });
        });
    }));
    passport.serializeUser((req, user, cb) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            cb(null, user.id);
        }
        catch (err) {
            cb(err);
        }
    }));
    passport.deserializeUser((id, cb) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield User.findOne({ _id: id }, (err, user) => {
                const userInformation = {
                    email: user.email,
                };
                if (!user) {
                    return cb(new Error('user not found'));
                }
                cb(null, userInformation);
            });
        }
        catch (err) {
            cb(err);
        }
    }));
};
