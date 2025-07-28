import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

// Insert sample videos (run once)
router.post('/seed', async (req, res) => {
  const sampleVideos =  [
  {
    videoId: '1',
    youtubeId: 'tVgW8kU1lZA',
    thumbnail: 'https://i.ytimg.com/vi/BSJa1UytM8w/mqdefault.jpg',
    title: 'Tum Mile - Emraan Hashmi | Romantic Bollywood Song',
    channelName: 'SonyMusicIndiaVEVO',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9evVE4=s88-c-k-c0x00ffffff-no-rj',
    views: '120M views',
    uploaded: '10 years ago',
    category: 'Music',
    likes: 1800000,
    dislikes: 12000,
  },
  {
    videoId: '2',
    youtubeId: 'VhQ9ySh6WwQ',
    thumbnail: 'https://i.ytimg.com/vi/KUpwupYj_tY/mqdefault.jpg',
    title: 'Raabta - Agent Vinod | Arijit Singh',
    channelName: 'T-Series',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu_VwKTz=s88-c-k-c0x00ffffff-no-rj',
    views: '95M views',
    uploaded: '8 years ago',
    category: 'Music',
    likes: 1500000,
    dislikes: 8000,
  },
  {
    videoId: '3',
    youtubeId: '4K3ZkOw3-L4',
    thumbnail: 'https://i.ytimg.com/vi/CtgD91Ev4NU/mqdefault.jpg',
    title: 'Pee Loon - Once Upon A Time In Mumbaai',
    channelName: 'SonyMusicIndia',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu-L2H=s88-c-k-c0x00ffffff-no-rj',
    views: '200M views',
    uploaded: '12 years ago',
    category: 'Music',
    likes: 2200000,
    dislikes: 10000,
  },
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
