import React from "react";
import { FaFacebookF, FaBell } from "react-icons/fa"; // Facebook and notification icons
import { MdMessage } from "react-icons/md"; // Message icon
import { FaArrowLeft } from "react-icons/fa6";


const HeaderBar = () => {
  return (
    <div className="bg-[#6A1B9A] text-white flex items-center justify-between p-4">
      <div className="flex items-center gap-6">
         <div><FaArrowLeft /> </div>
      <div className="text-lg">Help</div>
      </div>
     

      <div>
<div className="flex items-center gap-6">
     <p>VIEW TICKETS</p>
      </div>

      </div>
      
    </div>
  );
};

export default HeaderBar;