import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyOptions } from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;

  if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1];
        const secret = 'your-secret-key'; // Replace with your own secret key

    const options: VerifyOptions = {
        issuer: 'your-issuer', // Replace with the expected issuer value
        audience: 'your-audience', // Replace with the expected audience value
        // Additional options can be added here, like subject (sub) or clockTolerance
    };

    jwt.verify(token, secret, options, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        } else {
            // req.user = decoded; // Attach the decoded user data to the request object
            next();
        }
    });
  } else {
    res.status(401).json({ error: 'Authorization header missing' });
  }
};
