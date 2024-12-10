"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Left arrow icon
import { TiArrowSortedDown } from "react-icons/ti"; // Down arrow icon




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
</div>
  );
}

export default App;
