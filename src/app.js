// Import necessary modules
import express from "express";
import cors from "cors";
import config from './config/config.js';
import "./config/cloudinary.config.js"

// Create an Express application
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors({ origin: JSON.parse(config.origin_url_list) }));

// Root route that returns a simple "Server is running..." message
app.get("/", (req, res) => {
  res.send("Main Server is running...");
});

// Import routes
import routes_v1 from './routes/index.routes.js';

// Define routes for API version 1 under '/api/v1/'
app.use('/api/v1/', routes_v1);

// Export the configured Express app
export default app;
