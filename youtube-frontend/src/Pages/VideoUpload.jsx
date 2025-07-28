import React, { useState } from 'react';


const YOUTUBE_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('Education');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !videoFile || !thumbnail) {
      alert('Please fill all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);
    formData.append('category', category);
    formData.append('video', videoFile);
    formData.append('thumbnail', thumbnail);

    alert('Video submitted successfully!');
  };

  return (
    <div className="px-4 mt-12 py-6 sm:px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      <div className="bg-red-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-md border border-red-200">
        <div className="flex items-center justify-center mb-6 gap-3">
          <img
            src={YOUTUBE_LOGO_URL}
            alt="YouTube Logo"
            className="h-8 sm:h-10"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-red-700">Upload Video</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium text-red-700">Video Title*</label>
            <input
              type="text"
              className="w-full border border-red-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium text-red-700">Description*</label>
            <textarea
              rows="4"
              className="w-full border border-red-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-1 font-medium text-red-700">Tags (comma separated)</label>
            <input
              type="text"
              className="w-full border border-red-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium text-red-700">Category</label>
            <select
              className="w-full border border-red-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Education</option>
              <option>Entertainment</option>
              <option>Technology</option>
              <option>Vlogs</option>
              <option>Gaming</option>
              <option>News</option>
              <option>Sports</option>
            </select>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block mb-1 font-medium text-red-700">Thumbnail Image*</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-red-300 rounded p-1"
              onChange={(e) => setThumbnail(e.target.files[0])}
              required
            />
          </div>

          {/* Video */}
          <div>
            <label className="block mb-1 font-medium text-red-700">Video File*</label>
            <input
              type="file"
              accept="video/*"
              className="w-full border border-red-300 rounded p-1"
              onChange={(e) => setVideoFile(e.target.files[0])}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
