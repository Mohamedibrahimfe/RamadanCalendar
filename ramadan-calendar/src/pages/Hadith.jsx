import { useQuery } from "@tanstack/react-query";
import { fetchHadith } from "../api/hadithApi";
import React from "react";
import db from "../DB/db.json";
const Hadith = () => {
  // const {
  //   data: hadith,
  //   error,
  //   isLoading,
  //   refetch,
  //   data,
  // } = useQuery({
  //   queryKey: ["Hadith"],
  //   queryFn: fetchHadith,
  //   staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching Hadith: {error.message}</p>;

  const hadith = db.hadiths[Math.floor(Math.random() * db.hadiths.length)];
  const reGet = () => {
    return  db.hadiths[Math.floor(Math.random() * db.hadiths.length)];
  }
  return (
    <div
      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-lg min-w-6xl mx-auto font-Uthman "
      id="hadith"
    >
      <h2 className="text-xl font-semibold mb-2">📖 Hadith</h2>
      <q className="text-gray-400 dark:text-gray-300 mb-6 pb-4 text-3xl Uthman">
        {hadith.arabic}
      </q>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        -{hadith.english.text}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {db.metadata.arabic.title} - {db.metadata.arabic.author} -{" "}
        {db.metadata.arabic.introduction}
      </p>
      <button
        onClick={reGet}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        🔄 Get Another Hadith
      </button>
    </div>
  );
};

export default Hadith;
