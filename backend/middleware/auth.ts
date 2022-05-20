import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    passport.authenticate('jwt', { session: false });
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
