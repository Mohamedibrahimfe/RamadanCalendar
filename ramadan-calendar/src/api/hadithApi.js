export const fetchHadith = async () => {
  const response = await fetch(
    "https://api.hadith.gading.dev/books/bukhari?range=300-500"
  );

  if (!response.ok) throw new Error("Failed to fetch Hadith");
  const data = await response.json();

  // Select a random hadith from the returned data
  const hadiths = data.data.hadiths;
  return hadiths[Math.floor(Math.random() * hadiths.length)];
};
