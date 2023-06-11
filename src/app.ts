import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import envConfig from './env-config';
import { chatController } from './controllers/chatController';
import { authMiddleware } from './middleware/authMiddleware';
const bodyParser = require('body-parser');
const firebaseAdmin = require('firebase-admin');

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert('./serviceAccountKey.json'), // Path to your Firebase service account key JSON file
});

const app = express();
const port = 3000;
envConfig(); // Load environment variables from .env file

app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.post('/chat', authMiddleware, chatController);

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
