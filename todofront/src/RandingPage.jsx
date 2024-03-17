import React from "react";
import AppIcon from "./assets/Group 88.png";
import "./RandingPage.css";
import {useNavigate} from 'react-router-dom'; // useNavigate library
import greetingImg from './assets/greeting_image.png';

function LandingPage() {
  /* navi 선언*/
  const navigate = useNavigate();

  /* 시작버튼 클릭 시 /login 페이지로 이동 */
  const handleClick = () => {
    navigate('/login');
  }

  return (
    <div className="LandingPage_Frame">
      <div className="leftPage">
        <div className="LandingPage_Icon">
          <img className="Icon_Landing" src={AppIcon}></img>{" "}
          <p className="LandingPage_AppName">Mingle</p>
        </div>
        <div className="LandingPage_Text_title">
          일정관리
          <br />
          온라인 캘린더
        </div>
        <div className="LadingPage_text_content">
          일정관리와 할 일 관리를
          <br />한 번에!
          <br />
          더욱 간편하게!
          <br />
          <br />
          다른 사름돌과 일정을 공유하면서
          <br />
          습관과 목표에 도전해보세요!
        </div>
        <div className="Landing_page_Button">
          {/* onclick event adding & connecting Login Page */}
          <button onClick={handleClick} className="Landing_Page_StartButton">시작하기</button>
        </div>
      </div>
        <div className="rightPage"><img className="greetingImg" src={greetingImg}></img></div>
    </div>
  );
}

export default LandingPage;
