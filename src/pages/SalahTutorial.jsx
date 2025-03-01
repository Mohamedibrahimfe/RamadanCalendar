import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function SalahTutorial() {
  const language = useSelector((state) => state.language.language);
  const [videoLanguage, setVideoLanguage] = useState('en');

  const videos = {
    en: "https://www.youtube.com/embed/zalLv2NY98k?si=usyuTUIPT0KsfprQ",
    ar: "https://www.youtube.com/embed/SKQ4wPM_nOA?si=QRro8BRVh27BAEqp"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto p-6 max-w-4xl"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {language === "en" ? "Salah Tutorial" : "تعليم الصلاة"}
          </h1>
          <button
            onClick={() => setVideoLanguage(videoLanguage === 'en' ? 'ar' : 'en')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {videoLanguage === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videos[videoLanguage]}
            title="Salah Tutorial"
            className="w-full h-[500px] rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}