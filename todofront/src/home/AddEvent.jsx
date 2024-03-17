import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { CirclePicker } from "react-color";
import "./css/AddEvent.css";
import "./css/Switch.css";
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = ({ closeModal, addEvent, selectedStartDate }) => {
  // const [startDate, setStartDate] = useState(selectedStartDate);
  // const [endDate, setEndDate] = useState(selectedStartDate);
  const [startDate, setStartDate] = useState(selectedStartDate);
  const [endDate, setEndDate] = useState(
    moment(selectedStartDate).add(30, "minutes").toDate()
  );
  const [selectedColor, setSelectedColor] = useState(
    CirclePicker.defaultProps.colors[0]
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [isShared, setIsShared] = useState(false);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    addEvent({
      title: title,
      start: startDate,
      end: endDate,
      color: selectedColor,
    });
    closeModal();
  };

  return (
    <div className="addEventFrame">
      <div className="TopFrame"> Add Event</div>
      <div className="MiddleFrame">
        <form onSubmit={handleSubmit}>
          <input
            className="MiddleFrame_title"
            type="text"
            id="title"
            placeholder="일정추가"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <input
            className="MiddleFrame_content"
            type="text"
            id="content"
            placeholder="메모"
          ></input>
          <div className="DueDate">
            Due Date:
            <DatePicker
              className="startDate"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setEndDate(moment(date).add(30, "minutes").toDate());
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, aa h:mm"
            />
            <DatePicker
              className="EndDate"
              selected={endDate}
              minDate={startDate}
              minTime={
                startDate.getDate() === endDate.getDate()
                  ? new Date(startDate).setHours(
                      startDate.getHours(),
                      startDate.getMinutes()
                    )
                  : new Date().setHours(0, 0, 0, 0)
              }
              maxTime={new Date().setHours(23, 59, 0, 0)}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, aa h:mm"
            />
          </div>
          <div
            className="color_frame"
            style={{ display: "flex", alignItems: "center" }}
          >
            Color:
            <div onClick={() => setShowColorPicker(!showColorPicker)}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "2px",
                  background: selectedColor,
                  marginLeft: "2.8em",
                  borderRadius: "100px",
                }}
              />
              {showColorPicker ? (
                <div className="colorpicker">
                  <CirclePicker
                    className="color_select"
                    color={selectedColor}
                    onChangeComplete={(color) => {
                      setSelectedColor(color.hex);
                      setColor(color.hex);
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="Tag_frame">
            Tags:
            <div className="TagList_button">
              <select
                className="tagLists"
                value={selectedTag}
                onChange={(event) => setSelectedTag(event.target.value)}
              >
                <option value="">식습관</option>
                <option value="식습관">식습관</option>
                <option value="생활">생활</option>
                <option value="운동">운동</option>
                <option value="취미">취미</option>
                <option value="뷰티">뷰티</option>
                <option value="기타">기타</option>
              </select>
            </div>
          </div>

          <div
            className="share_frame"
            style={{ display: "flex", alignItems: "center" }}
          >
            Share:
            <input
              type="checkbox"
              id="chk1"
              checked={isShared}
              onChange={() => setIsShared(!isShared)}
              style={{ display: "none" }} // 체크박스를 숨김
            />
            <label htmlFor="chk1" className="switch"></label>
          </div>
          <button className="submitbutton" type="submit">
            Save Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
