import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Left arrow icon
import { TiArrowSortedDown } from "react-icons/ti"; // Down arrow icon

const HeaderBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
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
<div className="bg-white h-[60px] py-3 shadow-sm">
  <div className="flex items-center justify-between pl-3 pr-1 py-[2px]  mr-5 rounded-lg border place-self-end align-center w-[90px]">
        <p >English</p>
        <div className="text-[15px]">
          <TiArrowSortedDown />
        </div>
      </div>
</div>
      

    
    </div>
  );
};

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [name, setName] = useState("Aneesh Kumar Maury");
  const [account, setAccount] = useState("9345467502@ptyes");

  useEffect(() => {
    // Function to format time to HH:MM AM/PM
    const updateCurrentTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };

    // Update time immediately and every minute after
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000); // 60 seconds interval for time update
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-[80px]">
      {/* Header Bar */}
      <HeaderBar />

      {/* Chat Section */}
      <div className="flex-1 overflow-auto p-4 mt-8">
        {/* Sender Messages */}
        <div className="flex justify-end mb-2">
          <div className="bg-[#f0eaf8] text-black p-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs">
            <p>Made a payment to a fraudster for another reason</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Receiver Messages */}
        <div className="flex justify-start mb-2">
          <div className="bg-neutral-200 text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>Please enter the text below</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div className="bg-[#f0eaf8] text-black p-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs">
            <p>{account}</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-2">
          <div className="bg-neutral-200 text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>I understand how upsetting it is to lose your money, {name}.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-2">
          <div className="bg-neutral-200 text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>As a security measure, we&apos;ll first verify your payment details and block the account to which you&apos;ve made this payment.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div className="bg-[#f0eaf8] text-black p-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs">
            <p>Yes, block the fraudster&apos;s account.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-2">
          <div className="bg-neutral-200 text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>Could you please tell me how the fraudster contacted you?</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div className="bg-[#f0eaf8] text-black p-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs">
            <p>I received a link or notification</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Name Input */}
      <div className="p-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {/* Account Input */}
      <div className="p-4">
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          placeholder="Enter account details"
        />
      </div>

      {/* Input Area */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="border rounded-l-lg px-4 py-2 w-full"
          placeholder="Type a message"
        />
        <button className="bg-[#6A1B9A] text-white rounded-r-lg px-4 py-2">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
