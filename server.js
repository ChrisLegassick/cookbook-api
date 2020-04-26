const express = require('express');
const dotenv = require('dotenv');
const recipes = require('./routes/recipes');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use('/api/v1/recipes', recipes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runng in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
