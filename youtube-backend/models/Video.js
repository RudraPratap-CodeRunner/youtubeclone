import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId:String,
  youtubeId: String,
  thumbnail: String,
  title: String,
  channelName: String,
  channelAvatar: String,
  views: String,
  uploaded: String,
  category:String,
  likes:Number,
  dislikes:Number,
});

export default mongoose.model('Video', videoSchema);
