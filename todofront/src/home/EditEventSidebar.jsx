import React, { useState, useEffect } from "react";
import moment from "moment";
import "./css/EditEventSidebar.css"; // EditEventSidebar CSS
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { CirclePicker } from "react-color";
import "./css/Switch.css";
import "./Calender.jsx";

const EditEventSidebar = ({
  isOpen,
  onClose,
  event,
  updateEvent,
  selectedStartDate,
}) => {
  const [title, setTitle] = useState(event ? event.title : "");
  //   const [startDate, setStartDate] = useState(event ? event.start : new Date());
  //   const [endDate, setEndDate] = useState(event ? event.end : new Date());
  const [startDate, setStartDate] = useState(selectedStartDate);
  const [endDate, setEndDate] = useState(
    moment(selectedStartDate).add(30, "minutes").toDate()
  );
  const [selectedColor, setSelectedColor] = useState(
    event ? event.color : "#000000"
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [isShared, setIsShared] = useState(false);
  const [eventId, setEventId] = useState(event ? event.id : null);

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setStartDate(event.start);
      setEndDate(event.end);
      setSelectedColor(event.color);
      setEventId(event.id);
    } else {
      setTitle("");
      setStartDate(new Date());
      setEndDate(new Date());
      setSelectedColor("#000000");
      setEventId(null);
    }
  }, [event]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEvent = {
      title: title,
      start: startDate,
      end: endDate,
      color: selectedColor,
      id: eventId,
    };
    updateEvent(updatedEvent);
    onClose();
  };

  return (
    <div className="edit-event-sidebar">
      <form onSubmit={handleSubmit}>
        <div className="EditEventTopScreen">Edit Event</div>
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
              <div className="colorpicker_edit">
                <CirclePicker
                  className="color_select"
                  color={selectedColor}
                  onChangeComplete={(color) => {
                    setSelectedColor(color.hex);
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
            style={{ display: "none" }}
          />
          <label htmlFor="chk1" className="switch"></label>
        </div>
        <button className="submitbutton" type="submit">
          Edit Save
        </button>
      </form>
    </div>
  );
};

export default EditEventSidebar;
