import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from "@clerk/clerk-react";

export default function Welcome() {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useAuth(); // Add isLoaded check

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/dashboard', { replace: true }); // Add replace: true
    }
  }, [isSignedIn, isLoaded, navigate]);

  if (!isLoaded || isSignedIn) {
    return <div className="h-screen w-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('/pngegg.png')] opacity-5 bg-center bg-no-repeat bg-contain" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-3xl"
        >
          <img
            src="/pngegg.png"
            alt="Ramadan Logo"
            className="w-24 h-24 mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Ramadan Tracker
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Your comprehensive companion for a blessed Ramadan journey. Track your prayers, 
            manage daily routines, and stay connected with your spiritual goals.
          </p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/sign-in')}
              className="px-8 py-4 bg-blue-600 text-white cursor-pointer rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Join thousands of Muslims enhancing their Ramadan experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Prayer Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Never miss a prayer with our smart notification system
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Daily Tasks
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organize your Ramadan activities and track your progress
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AI Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get personalized recommendations for your Ramadan routine
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}