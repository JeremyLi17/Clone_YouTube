import express from 'express';
import {
  addComment,
  deleteComment,
  getComments,
} from '../controllers/comment.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// create a comment
router.post('/', verifyToken, addComment);

// delete a comment
router.delete('/:id', verifyToken, deleteComment);

// get all comments of a video
router.get('/:videoId', getComments);

export default router;
