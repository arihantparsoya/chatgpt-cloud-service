import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyOptions } from 'jsonwebtoken';
import * as firebaseAdmin from 'firebase-admin';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send('Unauthorized');
  }

  const idToken = authorization.split('Bearer ')[1];

  firebaseAdmin
  .auth()
    .verifyIdToken(idToken, true)
    .then((decodedToken: any) => {
      // req["user"] = decodedToken; // Attach the decoded token to the request object
      next();
    })
    .catch((error) => {
      console.error('Error validating Firebase token:', error);
      return res.status(401).send('Unauthorized');
    });
};
