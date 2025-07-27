import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

import videoRoutes from './routes/videoRoutes.js';
import authRoutes from './routes/auth.js'; // 👈 Add this
import userRoutes from './routes/userRoutes.js'; // 👈 Add this
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);
app.use('/api/auth', authRoutes);       
app.use('/api/users', userRoutes);   
app.use('/api/comments', commentRoutes);

app.use(cors({
  origin: 'http://localhost:5173', // replace with your React dev URL
  credentials: true
}));


app.get('/', (req, res) => {
  res.send({ message: "Hi server is running ..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
