import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./css/Calender.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import AddEvent from "./AddEvent.jsx";
import EditEventSidebar from "./EditEventSidebar.jsx";

const localizer = momentLocalizer(moment);

// head componet custom
function CustomDateHeader({ label }) {
  return (
    <div style={{ position: "relative", height: "30px" }}>
      <span
        style={{
          position: "absolute",
          left: "0",
          fontSize: "15px",
          fontWeight: "bold",
          paddingLeft: "0.4em",
          paddingTop: "0.3em",
          color: "#535353",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function CustomToolbar(toolbar) {
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate(Views.MONTH);
  };

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate(Views.MONTH);
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate(Views.MONTH);
  };

  return (
    <div className="toolbar-container">
      <div className="label-container">
        <label className="date-label">
          {moment(toolbar.date).format("MMMM YYYY")}
        </label>
      </div>
      <div className="buttons-container">
        <button className="calender_button_left" onClick={goToBack}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <button className="calender_button_middle" onClick={goToCurrent}>
          Today
        </button>
        <button className="calender_button_right" onClick={goToNext}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
      </div>
    </div>
  );
}

function CalenderPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [myEventsList, setMyEventsList] = useState([]);

  //editsidebar
  const [editSidebarIsOpen, setEditSidebarIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const updateEvent = (updatedEvent) => {
    setMyEventsList((prevEvents) => {
      return prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
    });
  };

  const addEvent = (newEvent) => {
    newEvent.title = `${moment(newEvent.start).format("HH:mm")} ${
      newEvent.title
    }`;
    setMyEventsList((prevEvents) => [...prevEvents, newEvent]);
  };

  const handleSelect = (event) => {
    setSelectedEvent(event);
    setEditSidebarIsOpen(true);
  };

  const closeEditSidebar = () => {
    setEditSidebarIsOpen(false);
  };

  const handleSelectSlot = ({ start }) => {
    setSelectedStartDate(start);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDate(null);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="CalenderPage">
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Modal"
        style={{
          overlay: {
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          },
          content: {
            backgroundColor: "#fff8de",
            position: "relative",
            width: "29em",
            height: "31em",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            transition: "opacity 1s",
            opacity: modalIsOpen ? 1 : 0,
            borderRadius: "10px",
            border: "1.8px solid rgba(0, 0, 0, 0.3)", // 모달 창 주변에 검은색 테두리 추가
          },
        }}
      >
        <AddEvent
          closeModal={closeModal}
          addEvent={addEvent}
          selectedStartDate={selectedStartDate}
        />
      </Modal>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 850 }}
        components={{
          toolbar: CustomToolbar,
          month: {
            dateHeader: CustomDateHeader,
          },
        }}
        onSelectEvent={handleSelect}
        onSelectSlot={handleSelectSlot}
        selectable
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            top: "35px",
            height: "20px",
            fontSize: "13px",
          },
        })}
      />
      <EditEventSidebar
        isOpen={editSidebarIsOpen}
        onClose={closeEditSidebar}
        event={selectedEvent}
        updateEvent={updateEvent}
      />
    </div>
  );
}

export default CalenderPage;
