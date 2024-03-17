import React, { useState, useEffect } from "react";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faBell,
  faCircleUser,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import LoginPage from "../login/Login.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const userProfile = {
    profileImage: "프로필 이미지 URL",
    level: "Level 1",
    followersCount: 12,
    followingCount: 10,
    username: "username",
    email: "userEmail@gmail.com",
    introduction: "자기소개를 적어주세요",
  };

  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="Today_Page">
      <div className="settingsPage_top">
        <h1>마이페이지</h1>
      </div>
      <div className="profile_line">
        <div className="upper_part">
          <div className="profile_image">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="icon_settingspage"
            />
          </div>
          <div className="profile_info">
            <div className="user_level">{userProfile.level}</div>
            <div className="user_name">{userProfile.username}</div>
            <div className="user_email">{userProfile.email}</div>
          </div>
          <div className="social_info">
            <div className="followers">
              <div className="number">{userProfile.followersCount}</div>
              <div className="text">팔로워</div>
            </div>
            <div className="following">
              <div className="number">{userProfile.followingCount}</div>
              <div className="text">팔로잉</div>
            </div>
          </div>
        </div>
        <div className="user_introduction">{userProfile.introduction}</div>
      </div>
      <div className="profile_reset_button">
        <button className="profile_reset_button_1">프로필 수정</button>
      </div>
      <div className="cutline"></div>
      <div className="settingsPage_content">
        <div className="content_settings">
          <p>비공개 계정 설정</p>
          <p>개인 정보 보호</p>
          <p>알림 설정</p>
          <p>약관 및 정책</p>
          <p>공지사항 및 고객 센터</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              onClick={() => handleClick(<LoginPage />)}
              className="logout_profile_button"
            >
              로그아웃
            </button>
          </Link>
          <button className="reset_Data_button">계정삭제</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
