import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, name: 'Rudra', text: 'This is iconic!' },
    { id: 2, name: 'Anjali', text: 'Never gets old 🔥' },
  ]);
  const [comment, setComment] = useState('');

  const handleAdd = () => {
    if (comment.trim()) {
      setComments([...comments, { id: Date.now(), name: 'You', text: comment }]);
      setComment('');
    }
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{comments.length} Comments</h2>
      <div className="flex mb-4">
        <input
          className="flex-1 border p-2 rounded-l"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 rounded-r">
          Post
        </button>
      </div>
      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c.id} className="flex justify-between bg-gray-100 p-2 rounded">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p>{c.text}</p>
            </div>
            <button onClick={() => handleDelete(c.id)} className="text-red-500 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
