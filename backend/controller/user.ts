import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/User.js';

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: 'User does not exist.' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env['SECRET_TOKEN'],
      { expiresIn: '1h' }
    );
    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { firstName, lastName, userName, email, password, confirmPassword } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exists.' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      userName,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env['SECRET_TOKEN'],
      { expiresIn: '1h' }
    );
    return res.status(200).json({ result, token });
  } catch (error) {
    return res.status(500).json(error);
  }
};
