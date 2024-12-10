import React from "react";
import { FaFacebookF, FaBell } from "react-icons/fa"; // Facebook and notification icons
import { MdMessage } from "react-icons/md"; // Message icon
import { FaArrowLeft } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";

const HeaderBar = () => {
  return (
    <div>
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


  <div className="flex items-center justify-between  pl-3 pr-1  py-[2px] mt-4 mr-5  rounded-lg border place-self-end align-center w-[90px] ">
     <p>English</p>
     <div className="text-[15px]"><TiArrowSortedDown /></div>
  </div>
  <div class="my-8 w-full h-[4px] bg-gray-300 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6),0_25px_50px_-12px_rgba(0,0,0,0.4)]"></div>





    </div>
   


  );
};

export default HeaderBar;