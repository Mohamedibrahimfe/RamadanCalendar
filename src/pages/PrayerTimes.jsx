import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function PrayerTimes() {
  const language = useSelector((state) => state.language.language);

  const prayers = [
    { name: { en: 'Fajr', ar: 'الفجر' }, time: '04:30' },
    { name: { en: 'Sunrise', ar: 'الشروق' }, time: '06:15' },
    { name: { en: 'Dhuhr', ar: 'الظهر' }, time: '12:30' },
    { name: { en: 'Asr', ar: 'العصر' }, time: '15:45' },
    { name: { en: 'Maghrib', ar: 'المغرب' }, time: '18:45' },
    { name: { en: 'Isha', ar: 'العشاء' }, time: '20:15' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto p-6 max-w-4xl"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
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
              className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <span className="text-lg font-medium text-gray-800 dark:text-white">
                {prayer.name[language]}
              </span>
              <span className="text-lg text-gray-600 dark:text-gray-300">
                {prayer.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}