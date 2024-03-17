import React, { useState } from "react";
import './css/Main.css';
import NavPage from '../nav/navigator.jsx';
import UpcomingPage from './upcomming.jsx';
import TodayPage from "./Today.jsx";
import CalenderPage from "./Calender.jsx";

function HomePage(){
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(<UpcomingPage />);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="HomePage_MainFrame">
      <NavPage isOpen={isOpen} toggleNav={toggleNav} handleClick={handleClick} />
      <div className={`content ${isOpen ? 'pushed' : ''}`}>
      </div>
      <div className={`HomePage_SubFrame ${isOpen ? '' : 'collapsed'}`}>
        {currentPage}
      </div>
    </div>
  );
}

export default HomePage;