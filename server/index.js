import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoutes from './routes/auth.js';
import UserRoutes from './routes/users.js';
import VideoRoutes from './routes/videos.js';
import CommentRoutes from './routes/comments.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connectDB = () => {
  // connect to mongoDB
  mongoose.set('strictQuery', false);
  try {
    mongoose.connect(process.env.MONGO, {
      dbName: 'Youtube',
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    throw err;
  }

  /* Annother approach
  mongoose
    .connect(process.env.MONGO, { dbName: 'Youtube' })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      throw err;
    });
   */
};

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/videos', VideoRoutes);
app.use('/api/comments', CommentRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connectDB();
  console.log('Server is running on localhost:8800');
});
