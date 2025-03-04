import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Typewriter from 'typewriter-effect'; // Add this import

export default function Ai() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState(null);
  const language = useSelector((state) => state.language.language);
  const fetchDataFromAI = async (input) => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(input);
    return result.response.text();
  };
  const generateResponse = async () => {
    if (!prompt.trim()) return;
  
    setIsLoading(true);
    setError(null);
  
    try {
      const promptPrefix = "You are a Ramadan routine planner assistant. Please help with the following request: ";
      const response = await fetchDataFromAI(promptPrefix + prompt);
      
      setChatHistory(prev => [...prev, 
        { type: 'user', content: prompt },
        { type: 'bot', content: response }
      ]);
      setPrompt('');
    } catch (error) {
      console.error('Error:', error);
      setError("Unable to connect to AI service. Please check your API key and try again.");
      setChatHistory(prev => [...prev,
        { type: 'user', content: prompt }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto p-6 max-w-4xl"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          {language === "en" ? "AI Routine Assistant" : "مساعد الروتين الذكي"}
        </h1>

        <div className="chat-container mb-6 h-[60vh] overflow-y-auto space-y-4 p-4 bg-gray-50 dark:bg-slate-200 rounded-lg">
          {chatHistory.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <Typewriter
                options={{
                  strings: language === "en" 
                    ? "Ask me about creating a beneficial Ramadan routine..."
                    : "اسألني عن إنشاء روتين مفيد لرمضان...",
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          )}
          {chatHistory.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}
              >
                {message.type === 'bot' ? (
                  <Typewriter
                    options={{
                      strings: [message.content],
                      autoStart: true,
                      delay: 30,
                      cursor: '',
                    }}
                  />
                ) : (
                  <p className="whitespace-pre-wrap">{message.content}</p>
                )}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && generateResponse()}
            placeholder={language === "en" ? "Ask about Ramadan routines..." : "اسأل عن روتين رمضان..."}
            className="flex-1 p-3 border rounded-lg  dark:text-white dark:border-gray-600"
            disabled={isLoading}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateResponse}
            disabled={isLoading}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400"
          >
            {isLoading ? (
              <span>⏳</span>
            ) : (
              <span>{language === "en" ? "Send" : "إرسال"}</span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
