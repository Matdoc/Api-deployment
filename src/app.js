import express from 'express';
import { setRoutes } from '../src/routes/index.js';
import serverless from 'serverless-http';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
setRoutes(app);

// Export the app as a serverless function
export const handler = serverless(app);
