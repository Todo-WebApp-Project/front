import React, { useState, useEffect } from "react";
import "./css/upcomming.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { getTasks } from './services/api';

// 더미 데이터 정의
const dummyTasks = [
  { id: 1, name: "Research content ideas", time: "10:00 AM", color: "#ff0000" },
  {
    id: 2,
    name: "Create a databases of guest authors",
    time: "11:30 AM",
    color: "#00ff00",
  },
  { id: 3, name: "Renew driver's license", time: "01:00 PM", color: "#0000ff" },
  { id: 4, name: "Consult account", time: "02:30 PM", color: "#ffff00" },
  { id: 5, name: "Print business card", time: "04:00 PM", color: "#ff00ff" },
];

function UpcomingPage() {
  const [tasks, setTasks] = useState(dummyTasks); // 더미 데이터를 초기 상태로 설정

  // tasks를 카테고리별로 분류
  const todayTasks = tasks;
  const tomorrowTasks = tasks;
  const thisWeekTasks = tasks;

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const data = await getTasks(); // 서버에서 데이터를 받아옴
  //     setTasks(data); // 데이터를 상태에 저장
  //   };

  //   fetchTasks(); // 데이터를 받아오는 함수를 호출
  // }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className="Upcoming_Page">
      <div className="upcoming_title">
        <h1 className="UpcomingPage_h1">Upcoming [12]</h1>
      </div>
      <div className="upcoming_Today_Block">
        <h2>Today</h2>
        <button className="add_block">
          <FontAwesomeIcon icon={faPlus} className="icon_plus" />
          <p>Add New Task</p>
        </button>
        <div className="upcomming_Task_datas">
          {todayTasks.map((task) => (
            <div key={task.id} className="task-container">
              <input type="checkbox" id={`check_btn_${task.id}`}></input>
              <label htmlFor={`check_btn_${task.id}`}>
                <span className="task_name">{task.name}</span>
                <div className="task_sub_block">
                  <span className="task_time">{task.time}</span>|
                  <span
                    className="task_color"
                    style={{
                      marginLeft: "1em",
                      backgroundColor: task.color,
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  ></span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="upcoming_Bottom_Block">
        <div className="upcoming_Tomorrow_Block">
          <h2>Tomorrow</h2>
          <button className="add_block">
            <FontAwesomeIcon icon={faPlus} className="icon_plus" />
            <p>Add New Task</p>
          </button>
          <div className="upcomming_Task_datas">
            {tomorrowTasks.map((task) => (
              <div key={task.id} className="task-container">
                <input type="checkbox" id={`check_btn_${task.id}`}></input>
                <label htmlFor={`check_btn_${task.id}`}>
                  <span className="task_name">{task.name}</span>
                  <div className="task_sub_block">
                    <span className="task_time">{task.time}</span>|
                    <span
                      className="task_color"
                      style={{
                        marginLeft: "1em",
                        backgroundColor: task.color,
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="upcoming_This_Week_Block">
          <h2>This week</h2>
          <button className="add_block">
            <FontAwesomeIcon icon={faPlus} className="icon_plus" />
            <p>Add New Task</p>
          </button>
          <div className="upcomming_Task_datas">
            {thisWeekTasks.map((task) => (
              <div key={task.id} className="task-container">
                <input type="checkbox" id={`check_btn_${task.id}`}></input>
                <label htmlFor={`check_btn_${task.id}`}>
                  <span className="task_name">{task.name}</span>
                  <div className="task_sub_block">
                    <span className="task_time">{task.time}</span>|
                    <span
                      className="task_color"
                      style={{
                        marginLeft: "1em",
                        backgroundColor: task.color,
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingPage;