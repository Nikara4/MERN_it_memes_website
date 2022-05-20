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
    passport.serializeUser((req, user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                userName: user.userName,
                id: user._id,
            };
            if (!user) {
                return cb(new Error('user not found'));
            }
            cb(null, userInformation);
        });
    });
};
