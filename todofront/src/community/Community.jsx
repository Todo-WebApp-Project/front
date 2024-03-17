import React, { useState, useEffect } from "react";
import "./css/Community.css";
import "./css/Challenge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faBell,
  faCircleUser,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

function CommunityPage() {
  const [profiles, setProfiles] = useState([
    { name: "홍길동", todo: "코드 리뷰하기" },
    { name: "김철수", todo: "문서 작성하기" },
    { name: "이영희", todo: "프로젝트 기획하기" },
    { name: "박지민", todo: "디자인 수정하기" },
    { name: "최유리", todo: "회의 준비하기" },
    { name: "홍길동", todo: "코드 리뷰하기" },
    { name: "김철수", todo: "문서 작성하기" },
    { name: "이영희", todo: "프로젝트 기획하기" },
    { name: "박지민", todo: "디자인 수정하기" },
    { name: "최유리", todo: "회의 준비하기" },
    { name: "홍길동", todo: "코드 리뷰하기" },
    { name: "김철수", todo: "문서 작성하기" },
    { name: "이영희", todo: "프로젝트 기획하기" },
    { name: "박지민", todo: "디자인 수정하기" },
    { name: "최유리", todo: "회의 준비하기" },
  ]);

  const friends = ["정우성", "김태희", "송혜교", "원빈", "이민호", "박보영"];

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="Today_Page">
      <div className="ChallengePage_TOP">
        <div className="searching_challenge">
          <input
            className={`inputsearching_data_challenge`}
            type="text"
            placeholder="ID를 검색하세요"
            onClick={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
          ></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="challengeIcon_search"
          />
          <button className="button_challenge1">
            <FontAwesomeIcon
              icon={faPlus}
              className="challengeIcon_search_button"
            />
          </button>
          <button className="button_challenge2">
            <FontAwesomeIcon
              icon={faBell}
              className="challengeIcon_search_button"
            />
          </button>
          <button className="button_challenge3">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="challengeIcon_search_button"
            />
          </button>
        </div>
        <div className="friendSection">
          {friends.map((friend, index) => (
            <div key={index} className="friend">
              <div className="icon_friendSection">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="profileIcon_friend"
                />
              </div>
              <div className="profileIcon_friend_name"> {friend}</div>
            </div>
          ))}
        </div>
        <div className="profileSection">
          {profiles.map((profile, index) => (
            <div key={index} className="profileCard">
              <div className="profileHeader">
                {" "}
                {/* 프로필 아이콘과 닉네임을 감싸는 새로운 div */}
                <FontAwesomeIcon icon={faCircleUser} className="profileIcon" />
                <div className="profileName">{profile.name}</div>
              </div>
              <div className="profileInfo">
                <div className="profileTodo">{profile.todo}</div>
              </div>
              <div className="profileActions">
                <button className="likeButton">
                  <FontAwesomeIcon icon={faHeart} className="inincon"/>
                </button>
                <button className="commentButton">
                  <FontAwesomeIcon icon={faComment} className="inincon"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
