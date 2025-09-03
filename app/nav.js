import React, { useEffect, useState } from "react";
 // Left arrow icon
import { TiArrowSortedDown } from "react-icons/ti"; // Down arrow ico
import { FaArrowLeft } from "react-icons/fa6";




const HeaderBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      {/* <div className="bg-[#6A1B9A] text-white flex items-center justify-between p-4">
        <div className="flex items-center gap-8 pl-3">
          <div className="text-[20px]">
            <FaArrowLeft />
          </div>
          <div className="text-[22px]">PhonePe Support</div>
        </div>

        <div>
          <p className="font-[18px]">VIEW TICKETS</p>
        </div>
      </div> */}
      <div className="  flex items-center justify-between bg-white h-[60px] py-3 px-2 shadow-sm">
      <div>  <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*RjJVjIm_-ATx7gjNGXveWg.png" alt="PhonePe" width={43} className="rounded-md"  /> </div>

      
    <div className="flex items-center gap-3 mr-6">
      <div>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVf6nm-Dk1ELbj1aBfeN_vJH6R1wAqYWnltw&s" alt="PhonePe" width={30} className="rounded-md"  /> </div>
    <div className="font-bold">PhonePe Support</div>

    </div>
    
        <div className="flex items-center justify-between pl-3 pr-1 py-[2px] mr-3 rounded-lg border place-self-end align-center w-[90px]">
          <p>English</p>
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
  const [account, setAccount] = useState("");
  const [ticketNumber, setTicketNumber] = useState(""); // State to store random 9-digit number

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

    // Generate a random 9-digit ticket number when component mounts
  }, []);

  useEffect(() => {
    // Generate a random 9-digit ticket number after the component mounts
    const randomTicketNumber = Math.floor(100000000 + Math.random() * 900000000);
    setTicketNumber(randomTicketNumber); // Set the generated number to state
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div>
    <div className="min-h-screen  flex flex-col pt-[80px]">
      {/* Header Bar */}
      <HeaderBar />

      {/* Chat Section */}
      <div className="flex-1 overflow-auto p-4 mt-8">
        {/* Sender Messages */}
         <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[250px]  text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>Please help me understand why you made a payment to a fraudster.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <div className="bg-[#f0eaf8] w-[250px] text-black p-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs">
            <p>Made a payment to a fraudster for another reason</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Receiver Messages */}
        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
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
          <div className="bg-gray-100 w-[280px] text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>I understand how upsetting it is to lose your money, {name}.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[280px] text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
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
          <div className="bg-gray-100 w-[280px] text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
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
        <div className="flex justify-end mb-2 mt-32">
          <div className="bg-[#f0eaf8] text-black p-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs">
            <p>No</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[250px] text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>Sure. While we cannot cancel or reverse payments, We&apos;ll check this for you and take necessary action.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[250px]  text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>The cybercrime cell may be able to help you get your money back after you raise a complaint with them. Tap <span className="text-[#6A1B9A] font-semibold">here</span> or call 1930 to do so.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>
   
        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[250px]  text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>You can also raise a <span className="text-[#6A1B9A] font-semibold ">complaint with your bank.</span> </p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Display the dynamic ticket number */}
  

        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[250px]  text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            
            <p> We hope this information was helpful. <br/> <br/> We&apos;ve created the ticket {ticketNumber} for you. To view it, Tap? on the top right corner of your app&apos;s home screen and then tap <span className="font-semibold"> My Tickets</span>.</p>
            <div className="flex justify-end items-center">
              <span className="text-xs text-gray-500">{currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start mb-2">
          <div className="bg-gray-100 w-[250px]  text-black p-3 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl max-w-xs">
            <p>Do you want to report any other fraud payments?</p>
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
  
    </div>

   
    </div>
    
  );
}

export default App;
