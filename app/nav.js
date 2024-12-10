import React from "react";
import { FaFacebookF, FaBell } from "react-icons/fa"; // Facebook and notification icons
import { MdMessage } from "react-icons/md"; // Message icon

const HeaderBar = () => {
  return (
    <div className="bg-purple-700 text-white flex justify-between items-center p-4">
      {/* Left Section */}
      <div className="text-lg font-bold">Help</div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <FaFacebookF className="text-xl cursor-pointer hover:scale-110 transition-transform duration-200" />
        <FaBell className="text-xl cursor-pointer hover:scale-110 transition-transform duration-200" />
        <MdMessage className="text-xl cursor-pointer hover:scale-110 transition-transform duration-200" />
      </div>
    </div>
  );
};

export default HeaderBar;