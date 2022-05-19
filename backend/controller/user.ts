import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { NativeError } from 'mongoose';
import passport from 'passport';

import User, { UserDocument } from '../models/User.js';
import mongoose from 'mongoose';

export const signIn = (req: Request, res: Response, next: NextFunction) => {
  const { userName, password } = req.body;

  passport.authenticate('local', async (err: NativeError) => {
    if (err) throw err;

    const existingUser = await User.findOne({ userName });

    if (!existingUser) res.status(404).json({ message: 'No user exists with the provided credentials.' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign(
      { userName: existingUser.userName, id: existingUser._id },
      process.env['SECRET_TOKEN'],
      { expiresIn: '1h' }
    );

      req.logIn(existingUser, (err: Error) => {
        if (err) throw err;
        res.status(200).json({ result: existingUser, token });
      });
    })
  (req, res, next);
};

export const signUp = (req: Request, res: Response) => {
  const { firstName, lastName, userName, email, password, confirmPassword } = req.body;

  User.findOne({ userName }, async (err: NativeError, user: UserDocument) => {
    if (err) throw err;
    if (user) res.status(400).json({ message: 'User already exists.' });
    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name: `${firstName} ${lastName}`,
        userName,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign(
        { userName: newUser.userName, id: newUser._id },
        process.env['SECRET_TOKEN'],
        { expiresIn: '1h' }
      );

      return res.status(200).json({ newUser, token });
  });
};

export const fetchUser = (req: Request, res: Response) => {
  res.send(req.user);
};

// export const fetchUser = async (req: Request, res: Response) => {
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

export const signOut = ((req: Request, res: Response) => {
  req.logout();
  res.send("success")
});
