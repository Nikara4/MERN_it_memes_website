import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';

interface JwtPayload {
  id: any;
  sub: string;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(
        token,
        process.env['SECRET_TOKEN']
      ) as JwtPayload;

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token) as JwtPayload;

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
