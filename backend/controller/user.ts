import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import User, { UserDocument } from '../models/User.js';

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  passport.authenticate('local', (err: Error, user: UserDocument) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    req.logIn(user, (err) => {
      if (err) throw err;
      res.send('Successfully Authenticated');
      console.log(req.user);
    });
  })(req, res, next);
};

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { firstName, lastName, userName, email, password } = req.body;

  User.findOne({ email }, async (err: Error, user: UserDocument) => {
    if (err) throw err;
    if (user) res.send('User Already Exists');
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);

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

      await newUser.save();
      res.send('User Created');
    }
  });
};

export const fetchUser = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;

    const singleUser = await User.findById({ userId });

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).send({ data: `No user with ID: ${userId}` });
    }

    console.log(singleUser);
    return res.status(200).json(singleUser);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const getUser = (req: Request, res: Response) => {
  res.send(req.user);
};
