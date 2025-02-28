import React, { useState } from "react";
import { motion } from "framer-motion";
import db from "../DB/db.json";
import { useSelector } from "react-redux";

const Hadith = () => {
  const [currentHadith, setCurrentHadith] = useState(db.hadiths[Math.floor(Math.random() * db.hadiths.length)]);
  const language = useSelector((state) => state.language.language);

  const getNewHadith = () => {
    const newHadith = db.hadiths[Math.floor(Math.random() * db.hadiths.length)];
    setCurrentHadith(newHadith);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 max-w-4xl"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {language === "en" ? "Daily Hadith" : "الحديث اليومي"}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={getNewHadith}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <span>🔄</span>
            {language === "en" ? "New Hadith" : "حديث جديد"}
          </motion.button>
        </div>

        <motion.div
          key={currentHadith.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 ">
            <div className="text-right mb-6">
              <q className="block text-2xl leading-relaxed Uthman text-gray-700 dark:text-gray-200">
                {currentHadith.arabic}
              </q>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 italic">
                {currentHadith.english.narrator}
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                {currentHadith.english.text}
              </p>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === "en" ? "Source: " : "المصدر: "}
              <span className="font-semibold">
                {db.metadata.arabic.title} - {db.metadata.arabic.author}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hadith;
