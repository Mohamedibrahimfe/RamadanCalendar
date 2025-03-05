import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from "@clerk/clerk-react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../redux/languageSlice';

export default function Welcome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSignedIn, isLoaded } = useAuth();
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isSignedIn, isLoaded, navigate]);

  if (!isLoaded || isSignedIn) {
    return <div className="h-screen w-screen flex items-center justify-center">Loading...</div>;
  }

  const content = {
    title: language === 'en' ? 'Welcome to Ramadan Tracker' : 'مرحباً بك في متتبع رمضان',
    description: language === 'en' 
      ? 'Your comprehensive companion for a blessed Ramadan journey. Track your prayers, manage daily routines, and stay connected with your spiritual goals.'
      : 'رفيقك الشامل في رحلة رمضان المباركة. تتبع صلواتك، وإدارة روتينك اليومي، والبقاء متصلاً بأهدافك الروحية.',
    cta: language === 'en' ? 'Start Your Journey' : 'ابدأ رحلتك',
    joinText: language === 'en' 
      ? 'Join thousands of Muslims enhancing their Ramadan experience'
      : 'انضم إلى آلاف المسلمين في تحسين تجربتهم الرمضانية',
    features: {
      prayer: {
        title: language === 'en' ? 'Prayer Tracking' : 'تتبع الصلاة',
        desc: language === 'en' 
          ? 'Never miss a prayer with our smart notification system'
          : 'لا تفوت أي صلاة مع نظام الإشعارات الذكي'
      },
      tasks: {
        title: language === 'en' ? 'Daily Tasks' : 'المهام اليومية',
        desc: language === 'en'
          ? 'Organize your Ramadan activities and track your progress'
          : 'نظم أنشطتك الرمضانية وتتبع تقدمك'
      },
      ai: {
        title: language === 'en' ? 'AI Assistant' : 'المساعد الذكي',
        desc: language === 'en'
          ? 'Get personalized recommendations for your Ramadan routine'
          : 'احصل على توصيات مخصصة لروتينك الرمضاني'
      }
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <button
        onClick={() => dispatch(toggleLanguage())}
        className="absolute top-4 right-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-white z-10"
      >
        {language === 'en' ? 'العربية' : 'English'}
      </button>

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
            {content.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {content.description}
          </p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/sign-in')}
              className="px-8 py-4 bg-blue-600 text-white cursor-pointer rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {content.cta}
            </motion.button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {content.joinText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {Object.entries(content.features).map(([key, feature]) => (
              <div key={key} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}