// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <label className="block text-sm mb-2">Email:</label>
      <input
        className="w-full border rounded-md py-2 px-3 mb-3"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="block text-sm mb-2">Password:</label>
      <input
        className="w-full border rounded-md py-2 px-3 mb-3"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
