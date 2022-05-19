import { Request, Response, NextFunction } from 'express';
import User, { UserDocument } from './models/User.js';
import bcrypt from 'bcryptjs';
import passportLocal from 'passport-local';
import { NativeError } from 'mongoose';

const localStrategy = passportLocal.Strategy;

export default (passport: any) => {
  passport.use(
    new localStrategy((email, password, done) => {
      User.findOne({ email }, (err: NativeError, user: UserDocument) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err: Error, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser(async (req: Request, user: UserDocument, cb: any) => {
    try {
      cb(null, user.id);
    } catch (err) {
      cb(err);
    }
  });

  passport.deserializeUser(async (id: any, cb: any) => {
    try {
      await User.findOne(
        { _id: id },
        (err: NativeError, user: UserDocument) => {
          const userInformation = {
            email: user.email,
          };
          if (!user) {
            return cb(new Error('user not found'));
          }
          cb(null, userInformation);
        }
      );
    } catch (err) {
      cb(err);
    }
  });
};
