import { Request, Response, NextFunction } from 'express';
import User, { UserDocument } from './models/User.js';
import bcrypt from 'bcryptjs';
import passportLocal from 'passport-local';
import { NativeError } from 'mongoose';

const localStrategy = passportLocal.Strategy;

export default (passport: any) => {
  passport.use(
    new localStrategy((email, password, done) => {
      User.findOne(
        { email: email.toLowerCase() },
        (err: NativeError, user: UserDocument) => {
          if (err) throw err;
          if (!user)
            return done(null, false, {
              message: `User with email: ${email} not found.`,
            });
          bcrypt.compare(
            password,
            user.password,
            (err: Error, result: boolean) => {
              if (err) return done(err);
              if (result) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: 'Invalid email or password.',
                });
              }
            }
          );
        }
      );
    })
  );

  passport.serializeUser((req: Request, user: Response, done: any) => {
    done(undefined, user);
  });

  passport.deserializeUser((id: any, done: any) => {
    User.findById(id, (err: NativeError, user: UserDocument) => {
      const userInformation = {
        email: user.email,
      };
      done(err, userInformation);
    });
  });
};

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/auth');
};
