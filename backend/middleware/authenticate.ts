import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { IUser } from '../dtos/common.model';

const SECRETE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

export const generateToken = (data: IUser) => {
  const token = sign(data, SECRETE_KEY, {
    expiresIn: '1 day',
  });
  return token;
};

export const validateUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request.headers.authorization;
  if (authorization) {
    const splittedToken = authorization.split(' ');

    try {
      try {
        const token = splittedToken[1];
        const user: IUser = (await verify(token, SECRETE_KEY)) as IUser;
        const isValidToken = await isTokenValid(user.email, token);
  
        if (user && isValidToken) {
          merge(request, { user });
          return next();
        }
    } catch (error) {
      return response
        .status(401)
        .json({ status: false, message: 'Unauthorized' });
    }
  }
  return response.status(401).json({ status: false, message: 'Unauthorized' });
};
