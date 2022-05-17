import User from './models/User.js';
import bcrypt from 'bcryptjs';
import passportLocal from 'passport-local';
const localStrategy = passportLocal.Strategy;
export default (passport) => {
    passport.use(new localStrategy((email, password, done) => {
        User.findOne({ email: email.toLowerCase() }, (err, user) => {
            if (err)
                throw err;
            if (!user)
                return done(null, false, {
                    message: `User with email: ${email} not found.`,
                });
            bcrypt.compare(password, user.password, (err, result) => {
                if (err)
                    return done(err);
                if (result) {
                    return done(null, user);
                }
                else {
                    return done(null, false, {
                        message: 'Invalid email or password.',
                    });
                }
            });
        });
    }));
    passport.serializeUser((req, user, done) => {
        done(undefined, user);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            const userInformation = {
                email: user.email,
            };
            done(err, userInformation);
        });
    });
};
export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/auth');
};
