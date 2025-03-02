import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

export default function PrayerTimes() {
  const language = useSelector((state) => state.language.language);
  
  const fetchPrayerTimes = async () => {
    // Get user's location
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  
    const { latitude, longitude } = position.coords;
    const date = new Date();
    
    const response = await fetch(
      `http://api.aladhan.com/v1/timings/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}?latitude=${latitude}&longitude=${longitude}&method=2`
    );
    const data = await response.json();
    return data.data.timings;
  };
  
  const { data: prayerTimes, isLoading, isError } = useQuery({
    queryKey: ['prayerTimes'],
    queryFn: fetchPrayerTimes,
  });
  
  const prayers = [
    { name: { en: 'Fajr', ar: 'الفجر' }, key: 'Fajr' },
    { name: { en: 'Sunrise', ar: 'الشروق' }, key: 'Sunrise' },
    { name: { en: 'Dhuhr', ar: 'الظهر' }, key: 'Dhuhr' },
    { name: { en: 'Asr', ar: 'العصر' }, key: 'Asr' },
    { name: { en: 'Maghrib', ar: 'المغرب' }, key: 'Maghrib' },
    { name: { en: 'Isha', ar: 'العشاء' }, key: 'Isha' }
  ];
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="text-center text-red-500 p-6">
        {language === "en" 
          ? "Error loading prayer times. Please check your location settings." 
          : "خطأ في تحميل أوقات الصلاة. يرجى التحقق من إعدادات الموقع."}
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto p-6 max-w-4xl"
    >
      <div className="bg-white dark:bg-gray-300 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          {language === "en" ? "Prayer Times" : "أوقات الصلاة"}
        </h1>
        <div className="grid gap-4">
          {prayers.map((prayer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-400 rounded-lg"
            >
              <span className="text-lg font-medium text-gray-800 dark:text-white">
                {prayer.name[language]}
              </span>
              <span className="text-lg text-gray-600 dark:text-gray-300">
                {prayerTimes?.[prayer.key]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}