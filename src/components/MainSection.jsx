import React from "react";
import btnImg1 from "../assets/Ellipse-22.png";
import btdImg from "../assets/Vector-(1).png";

const MainSection = () => {
  return (
    <div className="max-w-[1380px] mx-auto my-10 grid  grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 px-4 items-start">
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-100 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="font-semibold text-[18px] text-[#1F2937] leading-tight">
                  Login Issues – Can’t Access Account
                </h1>

                <button className="flex items-center gap-1 bg-[#B9F8CF] px-3 py-1 rounded-2xl">
                  <img className="h-3 w-3" src={btnImg1} alt="" />
                  <span className="text-[#0B5E06] font-medium text-sm">
                    Open
                  </span>
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Customer is unable to log in to their account. They’ve tried
                resetting their password multiple times but still can’t access.
              </p>
            </div>
            <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <p className="font-medium">#1001</p>
                <p className="text-red-500 font-semibold text-xs">
                  HIGH PRIORITY
                </p>
              </div>

              <div className="flex items-center gap-2 text-right">
                <p>John Smith</p>
                <div className="flex items-center gap-1">
                  <img className="w-3 h-3" src={btdImg} alt="" />
                  <p className="text-xs">1/15/2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-100 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="font-semibold text-[18px] text-[#1F2937] leading-tight">
                  Payment Failed – Unable to Process Order
                </h1>

                <button className="flex items-center gap-1 bg-[#B9F8CF] px-3 py-1 rounded-2xl">
                  <img className="h-3 w-3" src={btnImg1} alt="" />
                  <span className="text-[#0B5E06] font-medium text-sm">
                    Open
                  </span>
                </button>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Customer reports their payment is not being accepted during
                checkout. Tried multiple cards.
              </p>
            </div>

            <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <p className="font-medium">#1002</p>
                <p className="text-yellow-600 font-semibold text-xs">
                  MEDIUM PRIORITY
                </p>
              </div>

              <div className="flex items-center gap-2 text-right">
                <p>Jane Doe</p>
                <div className="flex items-center gap-1">
                  <img className="w-3 h-3" src={btdImg} alt="" />
                  <p className="text-xs">1/16/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🟦 Right Side: Task Status Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Task Status</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <p className="text-gray-500 text-sm">No tasks selected yet</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
