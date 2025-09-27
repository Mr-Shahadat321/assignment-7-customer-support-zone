import { HiMenu, HiX } from "react-icons/hi";


import React from "react";

const Navbar = ({isOpen, setIsOpen}) => {
  return (
    <div className="max-w-[1380px] mx-auto flex justify-between mt-2 px-4 py-2">
      <h1 className="font-bold text-[24px]">CS — Ticket System</h1>

      {/* logo */}
      <div className="md:hidden">
        <button onClick={()=> setIsOpen(!isOpen)}>
            {
                isOpen ? <HiX className= "text-3xl"/> : <HiMenu className = "text-3xl"/>
            }
            
        </button>
      </div>

      <div className= {`${isOpen ? "block" : "hidden"} md:flex items-center`}>
        <ul className="flex gap-6  ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="ml-4 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-lg text-white font-semibold">
          <span>+</span>
          <a className="pl-1 " href="">New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
