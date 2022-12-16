import React from "react";
import ModalInfo from "./modal";
import "./timeTable.scss";


const TimeTable = () => {
  

  return (
    <div className="time__parent">
      <div className="d-flex justify-content-between align-center timetable">
        <div className="btitle">Dars jadvali</div>
        < ModalInfo /> 
      </div>

      

    </div>
  );
};

export default TimeTable;
