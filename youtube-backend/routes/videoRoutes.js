import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

// Insert sample videos (run once)
router.post('/seed', async (req, res) => {
  const sampleVideos = [
  {
    videoId: '1',
    thumbnail: 'https://i.ytimg.com/vi/BSJa1UytM8w/mqdefault.jpg',
    title: 'Saiyaara Title Song | Romantic Bollywood Song',
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
    title: 'Tere Hawale | Arijit Singh',
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
    title: 'Rozana | Shreya Ghoshal',
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
  },
  {
    videoId: '5',
    thumbnail: 'https://i.ytimg.com/vi/JvC7aA24m4Q/mqdefault.jpg',
    title: 'Understanding JSX | Complete React Course in Hindi #4',
    channelName: 'CodeWithHarry',
    views: '2M views',
    uploaded: '1 years ago',
    category: 'React',
    likes: 872273,
    dislikes: 870,
    subscribers: 12731, 
  },
   {
    videoId: '6',
    thumbnail: 'https://i.ytimg.com/vi/hnVOvvbQrwA/mqdefault.jpg',
    title: 'Creating our first react app using create-react-app | Complete React Course in Hindi #2',
    channelName: 'CodeWithHarry',
    views: '3M views',
    uploaded: '5 years ago',
    category: 'React',
    likes: 5000,
    dislikes: 300,
    subscribers: 10000, 
  },
  {
    videoId: '7',
    thumbnail: 'https://i.ytimg.com/vi/xSVn79TZPqs/mqdefault.jpg',
    title: 'कैसे बनी एक माँ IAS Officer - Ft. Anu Kumari UPSC Rank 2 - Zindagi with Richa',
    channelName: 'Zindagi With Richa',
    views: '6M views',
    uploaded: '5 years ago',
    category: 'Podcasts',
    likes: 7000,
    dislikes: 5,
    subscribers: 200000, 
  },
  {
    videoId: '8',
    thumbnail: 'https://i.ytimg.com/vi/XnIY_UDhXP8/mqdefault.jpg',
    title: 'Body Shaming: समाज का असली चेहरा',
    channelName: 'Zindagi With Richa',
    views: '6M views',
    uploaded: '5 years ago',
    category: 'Podcasts',
    likes: 7000,
    dislikes: 5,
    subscribers: 200000, 
  },
   {
    videoId: '9',
    thumbnail: 'https://i.ytimg.com/vi/9ZnrX3c_4_Q/mqdefault.jpg',
    title: 'कलम का बाहुबली - Manoj Muntashir',
    channelName: 'Zindagi With Richa',
    views: '1.5M views',
    uploaded: '5 years ago',
    category: 'Podcasts',
    likes: 82300,
    dislikes: 500,
    subscribers: 200000, 
  },
   {
    videoId: '10',
    thumbnail: 'https://i.ytimg.com/vi/orYf6VDtj_k/mqdefault.jpg',
    title: 'Raataan Lambiyan - Lyric Video | Shershaah | Sidharth, Kiara | Tanishk B. | Jubin | Asees',
    channelName: 'SonyMusicIndiaVEVO',
    views: '300M views',
    uploaded: '5 years ago',
    category: 'Music',
    likes: 1800000,
    dislikes: 12000,
    subscribers: 34000000, 
  },
  {
    videoId: '11',
    thumbnail: 'https://i.ytimg.com/vi/zZasH6qkn8M/mqdefault.jpg',
    title: 'Teri Deewani - Kailash Kher | Official Video | Kailasa | Paresh | Naresh',
    channelName: 'SonyMusicIndiaVEVO',
    views: '300M views',
    uploaded: '5 years ago',
    category: 'Music',
    likes: 1800000,
    dislikes: 12000,
    subscribers: 34000000, 
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
