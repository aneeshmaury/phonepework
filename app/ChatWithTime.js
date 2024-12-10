"use client";

import React, { useEffect, useState } from "react";

const ChatWithTime = ({ message, isUser }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } my-4 px-4`}
    >
      <div
        className={`relative max-w-md p-4 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p>{message}</p>
        <span className="text-xs text-gray-500 absolute bottom-1 right-2">
          {currentTime}
        </span>
      </div>
    </div>
  );
};

export default ChatWithTime;
