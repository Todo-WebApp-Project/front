import React, { useState } from "react";
import "./navigator.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAnglesRight,
  faCalendarDays,
  faListCheck,
  faMedal,
  faComment,
  faSliders,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import grow1 from "../assets/grow_1.png";
import grow2 from "../assets/grow_2.png";
import grow3 from "../assets/grow_3.png";
import UpcomingPage from "../home/upcomming.jsx";
import TodayPage from "../home/Today.jsx";
import CalenderPage from "../home/Calender";
import LoginPage from '../login/Login.jsx';
import ChallengePage from '../community/Challenge.jsx';
import CommunityPage from '../community/Community.jsx';
import SettingsPage from '../settings/Settings.jsx';

function NavPage({ isOpen, toggleNav, handleClick }) {
  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="MenuTitle">
        <h1 className="NavappTitle">Mingle</h1>
        <button className="menuButton noHover" onClick={toggleNav}>
          <FontAwesomeIcon className="icon" icon={faBars} />
        </button>
      </div>
      <div className="TaskList">
        <h3 className="NavappSubTitle">Tasks</h3>
        <button
          className="moveButton"
          onClick={() => handleClick(<UpcomingPage />)}
        >
          <FontAwesomeIcon className="icon_tasks" icon={faAnglesRight} />{" "}
          Upcoming
        </button>
        <button
          className="moveButton"
          onClick={() => handleClick(<TodayPage />)}
        >
          <FontAwesomeIcon className="icon_tasks" icon={faListCheck} /> Today
        </button>
        <button
          className="moveButton"
          onClick={() => handleClick(<CalenderPage />)}
        >
          <FontAwesomeIcon className="icon_tasks" icon={faCalendarDays} /> Calender
        </button>
      </div>
      <div className="functionList">
        <h3 className="NavappSubTitle">Community</h3>
          <button className="moveButton"
                    onClick={() => handleClick(<ChallengePage />)}
                    >
            <FontAwesomeIcon className="icon_tasks" icon={faMedal} />
            Challenge
          </button>
          <button className="moveButton"
                    onClick={() => handleClick(<CommunityPage />)}
                    >
            <FontAwesomeIcon className="icon_tasks" icon={faComment} />
            Community
          </button>
      </div>
      <div className="Level_div">
        <img className="level_img" src={grow3}></img>
      </div>
      <div className="SignOut_div">
          <button className="moveButton" onClick={() => handleClick(<SettingsPage />)}>
            <FontAwesomeIcon className="icon_tasks" icon={faSliders} />
            Settings
          </button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="moveButton"
            onClick={() => handleClick(<LoginPage/>)}
          >
            <FontAwesomeIcon className="icon_tasks" icon={faRightFromBracket} />
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavPage;
