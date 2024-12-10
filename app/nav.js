"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Left arrow icon
import { TiArrowSortedDown } from "react-icons/ti"; // Down arrow icon

// Chat message with live time (only Hour:Minutes AM/PM)
const ChatWithTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      setCurrentTime(time);
    };

    const interval = setInterval(updateCurrentTime, 1000);
    updateCurrentTime(); // Initialize immediately

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="relative bg-gray-200 bottom-4 left-14 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl text-black p-4">
      <p className="text-sm">Made a payment to a fraudster for<br/> another reason</p>
      <span className="absolute bottom-1 right-2 text-xs text-gray-500">
        {currentTime}
      </span>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <div>
      <div className="bg-[#6A1B9A] text-white flex items-center justify-between p-4">
        <div className="flex items-center gap-8 pl-3">
          <div className="text-[20px]">
            <FaArrowLeft />
          </div>
          <div className="text-[20px]">Help</div>
        </div>

        <div>
          <p className="font-[18px]">VIEW TICKETS</p>
        </div>
      </div>

      <div className="flex items-center justify-between pl-3 pr-1 py-[2px] mt-4 mr-5 rounded-lg border place-self-end align-center w-[90px]">
        <p>English</p>
        <div className="text-[15px]">
          <TiArrowSortedDown />
        </div>
      </div>

      <div className="mt-4 w-full h-[1px] bg-gray-100 shadow-sm"></div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Bar */}
      <HeaderBar />

      {/* Chat Section */}
      <div className="flex justify-center items-center mt-8">
        <ChatWithTime />
      </div>
    </div>
  );
}

export default App;
