import express from "express";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { Router } from "./routes/email.js";


// Run express
const app = express();
const port = process.env.REACT_APP_PORT || 5001;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Set up production assets
app.use(express.static(resolve(__dirname, '../frontend/build')));

app.use(cors());
app.use(express.json());
app.use('/', Router);


// Let the React app handle any unknown routes
// Serve up the index.html if express doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log('Server started on port:', port);
});


