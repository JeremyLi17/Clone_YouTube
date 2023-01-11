import express from 'express';
import {
  addVideo,
  addView,
  deleteVideo,
  dislike,
  getByTags,
  getRandom,
  getSubscribe,
  getTrend,
  getVideo,
  like,
  search,
  updateVideo,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// create a video
router.post('/', verifyToken, addVideo);

// update a video
router.put('/:id', verifyToken, updateVideo);

// delete a video
router.delete('/:id', verifyToken, deleteVideo);

// get a video
router.get('/find/:id', getVideo);

// increase the view count
router.put('/view/:id', addView);

// get trend video
router.get('/trend', getTrend);

// get random video
router.get('/random', getRandom);

// get subscribed channel's video
router.get('/sub', verifyToken, getSubscribe);

// get video by tags
router.get('/tags', getByTags);

// search video by name
router.get('/search', search);

// like a video
router.put('/like/:id', verifyToken, like);

// dislike a video
router.put('/dislike/:id', verifyToken, dislike);

export default router;
