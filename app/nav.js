import React from "react";
import { FaFacebookF, FaBell } from "react-icons/fa"; // Facebook and notification icons
import { MdMessage } from "react-icons/md"; // Message icon
import { FaArrowLeft } from "react-icons/fa6";


const HeaderBar = () => {
  return (
    <div className="bg-[#6A1B9A] text-white flex items-center justify-between p-4">
      <div className="flex items-center gap-8 pl-3">
         <div className="text-[20px]"><FaArrowLeft /> </div>
      <div className="text-[20px]">Help</div>
      </div>
     

      <div>
<div>
     <p className="font-[18px] ">VIEW TICKETS</p>
      </div>

      </div>
      
    </div>
  );
};

export default HeaderBar;