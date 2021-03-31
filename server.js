const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const cors = require('cors');

const recipes = require('./routes/recipes');
const auth = require('./routes/auth');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());

app.use(xssClean());

app.use(hpp());

app.use(
  cors({ origin: 'https://legassick-recipe.netlify.app', credentials: true })
);

app.use('/api/v1/recipes', recipes);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
