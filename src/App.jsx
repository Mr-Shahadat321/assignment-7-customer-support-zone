import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ProgressCard from "./components/ProgressCard";
import MainSection from "./components/MainSection";
import ticketsData from "./data/TicketData";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
        <ProgressCard></ProgressCard>
        <MainSection></MainSection>
      </div>
    </>
  );
}

export default App;
