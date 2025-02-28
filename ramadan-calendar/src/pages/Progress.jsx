import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Progress() {
  const tasks = useSelector((state) => state.calendar.tasks);
  const language = useSelector((state) => state.language.language);

  const statistics = useMemo(() => {
    const totalTasks = Object.values(tasks).reduce((acc, dayTasks) => acc + dayTasks.length, 0);
    const completedTasks = Object.values(tasks).reduce((acc, dayTasks) => 
      acc + dayTasks.filter(task => task[1]).length, 0);
    
    const dailyCompletion = Object.entries(tasks).map(([date, dayTasks]) => ({
      date,
      total: dayTasks.length,
      completed: dayTasks.filter(task => task[1]).length
    }));

    return {
      totalTasks,
      completedTasks,
      completionRate: totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0,
      dailyCompletion
    };
  }, [tasks]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        {language === "en" ? "Ramadan Progress" : "تقدم رمضان"}
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-lg text-gray-600 dark:text-gray-400">
            {language === "en" ? "Total Tasks" : "إجمالي المهام"}
          </h3>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {statistics.totalTasks}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-lg text-gray-600 dark:text-gray-400">
            {language === "en" ? "Completed Tasks" : "المهام المكتملة"}
          </h3>
          <p className="text-4xl font-bold text-green-600 dark:text-green-400">
            {statistics.completedTasks}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-lg text-gray-600 dark:text-gray-400">
            {language === "en" ? "Completion Rate" : "معدل الإنجاز"}
          </h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                {statistics.completionRate}%
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200 dark:bg-purple-900">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${statistics.completionRate}%` }}
                transition={{ duration: 1 }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === "en" ? "Daily Progress" : "التقدم اليومي"}
        </h2>
        <div className="space-y-4">
          {statistics.dailyCompletion.map((day) => (
            <div key={day.date} className="border-b dark:border-gray-700 pb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 dark:text-gray-400">
                  Day {new Date(day.date).getDate()}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {day.completed}/{day.total}
                </span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200 dark:bg-blue-900">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(day.completed / (day.total || 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
