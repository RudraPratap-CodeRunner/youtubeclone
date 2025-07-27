import React, { useState } from 'react';
import axios from 'axios';

const AuthModal = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = isLogin ? '' : e.target.name.value;

    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        onLogin(res.data.user); // update Navbar
      } else {
        await axios.post('http://localhost:5000/api/auth/signup', {
          name,
          email,
          password,
        });
        // Auto-login after signup (optional)
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        onLogin(res.data.user);
      }
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-[380px] relative shadow-2xl">
        <button className="absolute top-3 right-4 text-gray-600 text-2xl font-bold" onClick={onClose}>
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-8"
          />
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          {isLogin ? 'Sign in to YouTube' : 'Create your YouTube Account'}
        </h2>

        {error && <p className="text-red-600 text-sm mb-2 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-red-600 cursor-pointer font-medium hover:underline"
            onClick={toggleMode}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
