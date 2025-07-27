import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editMap, setEditMap] = useState({});

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {
        console.error('Failed to fetch comments:', err.message);
      }
    };
    fetchComments();
  }, [videoId]);

  // Add a comment
 const handleAddComment = async () => {
  if (!newComment.trim()) return;

  try {
    const res = await axios.post('http://localhost:5000/api/comments', {
      user: 'Rudra',  // Simulated logged-in user
      text: newComment.trim(),
      videoId: videoId, // Must be valid MongoDB ObjectId string
    });

    if (res.data && res.data._id) {
      setComments((prev) => [...prev, res.data]);
      setNewComment('');
    } else {
      console.warn('Unexpected response:', res.data);
    }
  } catch (err) {
    console.error('Failed to add comment:', err.response?.data || err.message);
  }
};


  // Delete a comment
  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/comments/${id}`);
      setComments(comments.filter((c) => c._id !== id));
    } catch (err) {
      console.error('Failed to delete comment:', err.message);
    }
  };

  // Edit a comment
  const handleEditComment = async (id) => {
    const editedText = editMap[id];
    try {
      const res = await axios.put(`http://localhost:5000/api/comments/${id}`, {
        text: editedText,
      });
      setComments(comments.map((c) => (c._id === id ? res.data : c)));
      setEditMap((prev) => ({ ...prev, [id]: undefined }));
    } catch (err) {
      console.error('Failed to edit comment:', err.message);
    }
  };

  return (
    <div className="w-full mt-6">
      <h2 className="text-lg font-semibold mb-4">{comments.length} Comments</h2>
      <div className="flex items-start mb-6">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex flex-col w-full">
          <textarea
            className="w-full border rounded-lg p-2 mb-2 resize-none"
            placeholder="Add a comment..."
            rows="2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-end">
            <button
  onClick={handleAddComment}
  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
>
  Comment
</button>

          </div>
        </div>
      </div>

      {comments.map((c) => (
        <div key={c._id} className="flex items-start mb-4">
          <img
            src={`https://i.pravatar.cc/40?u=${c.user}`}
            alt={c.user}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-1 bg-gray-100 p-3 rounded-lg relative">
            <p className="font-semibold">{c.user}</p>
            {editMap[c._id] !== undefined ? (
              <div>
                <textarea
                  className="w-full border mt-2 p-1 rounded text-sm"
                  rows="2"
                  value={editMap[c._id]}
                  onChange={(e) =>
                    setEditMap((prev) => ({ ...prev, [c._id]: e.target.value }))
                  }
                />
                <div className="flex gap-2 mt-2 text-sm">
                  <button
                    className="text-blue-600"
                    onClick={() => handleEditComment(c._id)}
                  >
                    Save
                  </button>
                  <button
                    className="text-gray-600"
                    onClick={() =>
                      setEditMap((prev) => ({ ...prev, [c._id]: undefined }))
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm mt-1">{c.text}</p>
                <div className="flex gap-4 mt-2 text-xs text-gray-500">
                  <button onClick={() => setEditMap((prev) => ({ ...prev, [c._id]: c.text }))}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteComment(c._id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
