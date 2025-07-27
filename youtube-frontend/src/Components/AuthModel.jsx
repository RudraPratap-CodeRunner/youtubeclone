import React, { useState } from 'react';

const AuthModal = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = isLogin ? 'User' : e.target.name?.value;
    onLogin({ name, email });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-[380px] relative shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-600 text-2xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* YouTube Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-8"
          />
        </div>

        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
          {isLogin ? 'Sign in to YouTube' : 'Create your YouTube Account'}
        </h2>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Link */}
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
