import React from "react";
import "./Login.css";
import { useState } from "react";
import BigIcon from "../assets/Group 143.png";
import SmallIcon from "../assets/Group 88.png";
import GoogleIcon from "../assets/image 17.png";
import GoogleClenderIcon from "../assets/google_calender_image.png";
import {useNavigate} from 'react-router-dom'; // useNavigate library

function LoginPage() {
  /* page 상태관리 'login', 'fogot', 'google', 'signup', 'complete'*/
  const [view, setView] = useState("login");

  // 모달창 상태관리
  const [showModal, setShowModal] = useState(false);

  /* navi 선언*/
  const navigate = useNavigate();

  /* 시작버튼 클릭 시 /home 페이지로 이동 */
  const handleClick = () => {
    navigate('/home');
  }

  const loginView = (
    <div className="LoginPage_loginview">
      <div className="loginView_left">
        <p className="Login_Title">Mingle</p>
        <img className="Login_Icon" src={BigIcon}></img>{" "}
      </div>
      <div className="loginView_right">
        <div className="loginView_right_Title">Login</div>
        <div className="loginView_right_InputData">
          <input
            className="loginView_right_InputData_Textfild"
            type="text"
            id="Email"
            name="Email"
            placeholder="Email"
          ></input>
          <input
            className="loginView_right_InputData_Textfild"
            type="text"
            id="password"
            name="password"
            placeholder="password"
          ></input>
        </div>
        <div>
          {" "}
          <button
            className="forgetpasswordButton"
            onClick={() => setView("forgot")}
          >
            Forget Password?
          </button>
        </div>
        <div>
          <button onClick={handleClick} className="loginView_right_LoginButton">Login</button>
        </div>
        <div className="loginView_right_or">or</div>
        <div className="loginView_right_other">
          <button className="googleButton" onClick={() => setView("google")}>
            {" "}
            <img className="googleIconCSS" src={GoogleIcon}></img> Continue with
            Google{" "}
          </button>
        </div>
        <div className="loginView_right_signUP">
          <p className="newMembertxt">New Member?</p>{" "}
          <button
            className="createAcountButton"
            onClick={() => setView("signup")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );

  const forgotView = (
    <div>
      <div className="LoginPage_loginview">
        <div className="loginView_left">
          <p className="Login_Title">Mingle</p>
          <img className="Login_Icon" src={BigIcon}></img>{" "}
        </div>
        <div className="forgotView_right">
          <div className="forgotView_Title">Find the Password</div>
          <div className="forgotView_Subtitle">
            비밀번호를 찾기 위해 유효한 이메일 주소를 입력해주세요.
          </div>
          <div className="forgotView_input">
            {" "}
            <input className="forgotView_inputTxt"></input>{" "}
          </div>
          <button
            onClick={() => setView("login")}
            className="forgotView_button"
          >
            요청
          </button>
        </div>
      </div>
    </div>
  );

  const googleView = (
    <div>
      <div className="LoginPage_loginview">
        <div className="loginView_left">
          <p className="Login_Title">Mingle</p>
          <img className="Login_Icon" src={BigIcon}></img>{" "}
        </div>
        <div className="loginView_right">
          <div className="threeIcon">
            <img className="appicon_googleVIew" src={SmallIcon}></img>
            <i className="fas fa-sync"></i>
            <img className="googlecalender_icon" src={GoogleClenderIcon}></img>
          </div>
          <div className="googleView_right_SubTitle">
            구글 계정으로 로그인을 선택하셨습니다.
          </div>
          <div className="googleView_right_Title">
            구글 캘린더와 동기화하시겠습니까?
          </div>
          <div className="googleView_rightbutton2">
            <button className="googleView_right_yes">Yes</button>
            <button
              onClick={() => setView("login")}
              className="googleView_right_no"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const signupView = (
    <div>
      <div className="LoginPage_loginview">
        <div className="LoginPage_signview_left">
          <div className="LoginPage_signview_left_title">Create Account</div>
          <div className="LoginPage_signview_left_Subtitle">
            Welcome! Please enter your information.
          </div>
          <div className="signupthreebutton">
            <input
              className="signupthreebutton_username"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            ></input>
            <input
              className="signupthreebutton_Email"
              type="text"
              id="Email"
              name="Email"
              placeholder="Email"
            ></input>
            <input
              className="signupthreebutton_password"
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <button
            onClick={() => {
              setView("complete");
              setShowModal(true);
            }}
            className="LoginPage_signview_left_completebutton"
          >
            Complete
          </button>
          <div className="loginView_right_or_signup">or</div>
          <div className="loginView_right_other">
            <button className="googleButton" onClick={() => setView("google")}>
              {" "}
              <img className="googleIconCSS" src={GoogleIcon}></img> Continue
              with Google{" "}
            </button>
          </div>
        </div>
        <div className="LoginPage_signview_right">
          <p className="Login_Title">Mingle</p>
          <img className="Login_Icon_signup" src={BigIcon}></img>{" "}
        </div>
      </div>
    </div>
  );

  const completeView = (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <div className="completeView_Title">
              <img src={SmallIcon} className="completeViewIcon"></img>{"Complte"}
            </div>
            <div className="completeView_SubTitle">작성하신 정보가 맞는지 확인해주세요</div>
            <div className="completeView_Data">
              <div><span className="completeView_left">Username</span> <p className="completeView_right_Username">Kim mingle</p></div>
              <div><span className="completeView_left">Email</span> <p className="completeView_right_Email">mingle@google.com</p></div>
              <div><span className="completeView_left">Password</span> <p className="completeView_right_Password">********</p></div>
            </div>
            <button className="completeView_modal_button" onClick={() => { setShowModal(false); setView("login"); }}>
            Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="LoginPage_Frame">
      <div className="LoginPage_MainFrame">
        {view === "login"
          ? loginView
          : view === "forgot"
          ? forgotView
          : view === "google"
          ? googleView
          : view === "signup"
          ? signupView
          : completeView}
      </div>
    </div>
  );
}

export default LoginPage;