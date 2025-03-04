import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SignIn, useAuth } from "@clerk/clerk-react";
import { useEffect } from 'react';

export default function Welcome() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div
      id='welcome'
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <div className="text-center space-y-6">
          <img
            className="mx-auto h-16 w-auto"
            src="/pngegg.png"
            alt="Ramadan Tracker"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ramadan Tracker
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your digital companion for a blessed Ramadan journey. Track prayers, manage routines, and stay motivated throughout the holy month.
          </p>
          <button
            onClick={() => navigate('/sign-in')}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </div>
      </motion.div>
    </div>
  );
}