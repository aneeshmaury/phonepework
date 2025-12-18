"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";



const HeaderBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
      <div className="flex items-center justify-between h-[60px] px-4">
        <div className="flex items-center gap-3">
          <FaArrowLeft className="text-gray-700 text-sm" />
           <image
            src="https://s3-alpha.figma.com/hub/file/2736691733/resized/1200x720/3e8b77fb-3995-4701-bb49-a72b7f2746e1-cover.png"
            alt="PhonePe"
            width={32}
            height={32}
            className="rounded-md"
          />
          <div className="font-semibold text-gray-800 text-lg">
            PhonePe Support
          </div>
        </div>

        <div className="flex items-center gap-1 border rounded-lg px-2 py-[2px] w-[90px] justify-between">
          <p>English</p>
          <TiArrowSortedDown />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [name, setName] = useState("Aneesh Kumar Maur");
  const [account, setAccount] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");

  // Update current time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Generate random 9-digit ticket number
  useEffect(() => {
    const randomNum = Math.floor(100000000 + Math.random() * 900000000);
    setTicketNumber(randomNum);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[80px] bg-gray-50">
      {/* Header */}
      <HeaderBar />

      {/* Chat Section */}
      <div className="flex-1 overflow-auto p-4 mt-8 space-y-3">
        {/* Incoming Message */}
        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>Please help me understand why you made a payment to a fraudster.</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end">
          <div className="bg-[#f0eaf8] p-3 rounded-2xl max-w-xs text-black">
            <p>Made a payment to a fraudster for another reason.</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Additional Conversation */}
        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>Please enter the text below.</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#f0eaf8] p-3 rounded-2xl max-w-xs text-black">
            <p>{account ? account : ""}</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>I understand how upsetting it is to lose your money, {name}.</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>
              As a security measure, we&apos;ll first verify your payment details and block
              the account to which you&apos;ve made this payment.
            </p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#f0eaf8] p-3 rounded-2xl max-w-xs text-black">
            <p>Yes, block the fraudster&apos;s account.</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>Could you please tell me how the fraudster contacted you?</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-11">
          <div className="bg-[#f0eaf8] p-3 rounded-2xl max-w-xs text-black">
            <p>I received a link or notification.</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

<div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>
              Sure. While we cannot cancel or reverse payments, we&apos;ll check this
              for you and take necessary action.
            </p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
         <div className="flex justify-end">
          <div className="bg-[#f0eaf8] p-3  rounded-2xl max-w-xs text-black">
            <p>No</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
 
        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>
              Sure. While we cannot cancel or reverse payments, we&apos;ll check this
              for you and take necessary action.
            </p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>
              The cybercrime cell may be able to help you get your money back after
              you raise a complaint with them. Tap{" "}
              <span className="text-[#6A1B9A] font-semibold">here</span> or call 1930 to
              do so.
            </p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>
              You can also raise a{" "}
              <span className="text-[#6A1B9A] font-semibold">
                complaint with your bank
              </span>
              .
            </p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Ticket Info */}
        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>We hope this information was helpful</p>
            <br/>
            <p>
              We&apos;ve created the ticket {ticketNumber} for you.  
              To view it, Tap ? on the top right corner of your app&apos;s home screen and
              then tap <span className="font-semibold">My Tickets</span>.
            </p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-3 rounded-2xl max-w-xs text-black">
            <p>Do you want to report any other fraud payments?</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="p-4 space-y-3 mt-5">
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          placeholder="Enter account details"
        />
      </div>
    </div>
  );
}

export default App;
