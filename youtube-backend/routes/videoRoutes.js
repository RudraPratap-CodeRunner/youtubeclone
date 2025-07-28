import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

// Insert sample videos (run once)
router.post('/seed', async (req, res) => {
  const sampleVideos =  [
  {
    videoId: '1',
    thumbnail: 'https://i.ytimg.com/vi/BSJa1UytM8w/mqdefault.jpg',
    title: 'Tum Mile - Emraan Hashmi | Romantic Bollywood Song',
    channelName: 'SonyMusicIndiaVEVO',
    views: '120M views',
    uploaded: '10 years ago',
    category: 'Music',
    likes: 1800000,
    dislikes: 12000,
    subscribers: 34000000, 
  },
  {
    videoId: '2',
    thumbnail: 'https://i.ytimg.com/vi/KUpwupYj_tY/mqdefault.jpg',
    title: 'Raabta - Agent Vinod | Arijit Singh',
    channelName: 'T-Series',
    views: '95M views',
    uploaded: '8 years ago',
    category: 'Music',
    likes: 1500000,
    dislikes: 8000,
    subscribers: 260000000, 
  },
  {
    videoId: '3',
    thumbnail: 'https://i.ytimg.com/vi/CtgD91Ev4NU/mqdefault.jpg',
    title: 'Pee Loon - Once Upon A Time In Mumbaai',
    channelName: 'SonyMusicIndia',
    views: '200M views',
    uploaded: '12 years ago',
    category: 'Music',
    likes: 2200000,
    dislikes: 10000,
    subscribers: 55000000, 
  },
  {
    videoId: '4',
    thumbnail: 'https://i.ytimg.com/vi/RGKi6LSPDLU/mqdefault.jpg',
    title: 'React Tutorial in Hindi 🔥🔥',
    channelName: 'CodeWithHarry',
    views: '1M views',
    uploaded: '4 years ago',
    category: 'React',
    likes: 124124,
    dislikes: 23213,
    subscribers: 12731, 
  }
  
];

  try {
    await Video.insertMany(sampleVideos);
    res.status(201).json({ message: 'Sample videos inserted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all videos
router.get('/', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

// Increment like count
router.put('/:videoId/like', async (req, res) => {
  try {
    const updatedVideo = await Video.findOneAndUpdate(
      { videoId: req.params.videoId },
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedVideo) return res.status(404).json({ message: 'Video not found' });
    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Increment dislike count
router.put('/:videoId/dislike', async (req, res) => {
  try {
    const updatedVideo = await Video.findOneAndUpdate(
      { videoId: req.params.videoId },
      { $inc: { dislikes: 1 } },
      { new: true }
    );
    if (!updatedVideo) return res.status(404).json({ message: 'Video not found' });
    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
