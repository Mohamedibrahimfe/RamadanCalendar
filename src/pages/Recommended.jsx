import React from "react";
import { useSelector } from "react-redux";

export default function Recommended() {
  const language = useSelector((state) => state.language.language);

  const routines = [
    {
      time: "Pre-Dawn",
      en: "Suhoor & Fajr Prayer",
      ar: "السحور وصلاة الفجر",
      tasks: [
        { en: "Wake up for Suhoor", ar: "الاستيقاظ للسحور" },
        { en: "Make dua before Suhoor", ar: "الدعاء قبل السحور" },
        { en: "Pray Fajr", ar: "صلاة الفجر" },
        { en: "Morning Dhikr", ar: "أذكار الصباح" }
      ]
    },
    {
      time: "Morning",
      en: "Morning Activities",
      ar: "أنشطة الصباح",
      tasks: [
        { en: "Read Quran", ar: "قراءة القرآن" },
        { en: "Rest if needed", ar: "الراحة عند الحاجة" }
      ]
    },
    {
      time: "Afternoon",
      en: "Afternoon Worship",
      ar: "عبادة الظهر",
      tasks: [
        { en: "Pray Dhuhr", ar: "صلاة الظهر" },
        { en: "Read Hadith", ar: "قراءة الحديث" }
      ]
    },
    {
      time: "Evening",
      en: "Pre-Iftar",
      ar: "قبل الإفطار",
      tasks: [
        { en: "Pray Asr", ar: "صلاة العصر" },
        { en: "Prepare for Iftar", ar: "التحضير للإفطار" },
        { en: "Make dua before Iftar", ar: "الدعاء قبل الإفطار" }
      ]
    },
    {
      time: "Night",
      en: "Night Worship",
      ar: "عبادة الليل",
      tasks: [
        { en: "Break fast with dates", ar: "الإفطار على التمر" },
        { en: "Pray Maghrib", ar: "صلاة المغرب" },
        { en: "Pray Isha", ar: "صلاة العشاء" },
        { en: "Pray Taraweeh", ar: "صلاة التراويح" }
      ]
    },
    {
      time: "Evening",
      en: "Evening Activities",
      ar: "أنشطة المسائية",
      tasks: [
        { en: "Read Quran", ar: "قراءة القرآن" },
        { en: "Rest if needed", ar: "الراحة عند الحاجة" }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {language === "en" ? "Hints For Daily Routine" : "تلميحات للعبادة اليومية"}
      </h1>
      <div className="space-y-6 space-x-4 grid grid-cols-2 gap-6 ">
        {routines.map((routine, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full h-[200px] "
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {routine.time} - {language === "en" ? routine.en : routine.ar}
            </h2>
            <ul className="space-y-2 ">
              {routine.tasks.map((task, taskIndex) => (
                <li 
                  key={taskIndex}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-green-500">•</span>
                  <span>{language === "en" ? task.en : task.ar}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
