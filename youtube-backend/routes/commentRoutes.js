import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

// 🔍 GET all comments for a video
// GET /api/comments/:videoId
router.get('/:videoId', async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➕ POST a new comment for a video
// POST /api/comments/:videoId
router.post('/:videoId', async (req, res) => {
  const { userName, text } = req.body;
  try {
    const comment = await Comment.create({
      videoId: req.params.videoId,
      userName,
      text
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✏️ PUT (edit) a comment
// PUT /api/comments/:id
router.put('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    comment.text = req.body.text;
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ❌ DELETE a comment
// DELETE /api/comments/:id
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    await comment.deleteOne();
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
