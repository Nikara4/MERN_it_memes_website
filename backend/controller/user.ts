import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import User from '../models/User.js';

export const signIn = (req: Request, res: Response) => {
  const { userName, password } = req.body;
  User.findOne({ userName }).then((user) => {
    if (!user) {
      return res.status(401).send({
        success: false,
        message: 'No user exists with the provided credentials.',
      });
    }

    const isPasswordCorrect = bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      res.status(401).json({ success: false, message: 'Invalid credentials.' });

    const token = jwt.sign(
      { userName: user.userName, id: user._id },
      process.env['SECRET_TOKEN'],
      { expiresIn: '1h' }
    );

    return res.status(200).send({
      success: true,
      message: 'Logged in successfully!',
      token: 'Bearer ' + token,
      user: user,
    });
  });
};

export const signUp = async (req: Request, res: Response) => {
  const { firstName, lastName, userName, email, password, confirmPassword } =
    req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(400)
        .json({
          message:
            'A user with this username already exists. Please choose different username.',
        });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({
          message:
            'Passwords do not match. Please make sure your password is the same in both fields.',
        });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      userName,
      email,
      password: hashedPassword,
    });



    return res.status(200).send({
      success: true,
      message: 'User created successfully.',
      user: newUser,
    });
  } catch (err) {
    // console.log(firstName, lastName, userName, email, password, confirmPassword)
    return res.status(400).send({
      success: false,
      message: 'Something went wrong, please try again.',
      error: err,
    });
  }
};

// const existingUser = User.findOne({ userName });

// console.log(!!existingUser)
// if (existingUser)
//   return res.status(400).json({ message: 'User already exists.' });

// if (password !== confirmPassword)
//   return res.status(400).json({ message: 'Passwords do not match' });

// const hashedPassword = bcrypt.hash(password, 10);

// const newUser = new User({
//   name: `${firstName} ${lastName}`,
//   userName,
//   email,
//   password: hashedPassword,
// });

// return newUser
//   .save()
//   .then((user: any) => {
//     res.status(200).send({
//       success: true,
//       message: 'User created successfully.',
//       user: user,
//     });
//   })
//   .catch((err: Error) => {
//     res.status(400).send({
//       success: false,
//       message: 'Something went wrong, please try again.',
//       error: err,
//     });
//   });

export const authUser = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    msg: 'You are successfully authenticated to this route!',
  });
};

// for profile page implementation

// export const fetchSingleUser = async (req: Request, res: Response) => {
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

export const signOut = (req: Request, res: Response) => {
  req.logout();
  res.send('success');
};
