import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { NativeError } from 'mongoose';
import passport from 'passport';

import User, { UserDocument } from '../models/User.js';

export const signIn = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  passport.authenticate('local', async (err: NativeError) => {
    if (err) throw err;

    const existingUser = await User.findOne({ email });

    if (!existingUser) res.status(404).json({ message: 'No user exists with the provided credentials.' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
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

  User.findOne({ email }, async (err: NativeError, user: UserDocument) => {
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
        { email: newUser.email, id: newUser._id },
        process.env['SECRET_TOKEN'],
        { expiresIn: '1h' }
      );

      return res.status(200).json({ newUser, token });
  });
};

export const fetchUser = (req: Request, res: Response) => {
  res.send(req.user);
};
