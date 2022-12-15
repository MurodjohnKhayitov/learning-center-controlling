import React, { useState } from "react";
import { Modal } from "antd";
import SelectTable from "./SelectTable";
import "./timeTable.scss";
import { NavLink } from "react-router-dom";


const TimeTable = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div className="time__parent">
      <div className="d-flex justify-content-between align-center timetable">
        <div className="btitle">Dars jadvali</div>
        <NavLink to="#" activeclassname="active" onClick={showModal}>
          Jadval qo'shish
        </NavLink>
      </div>

      <Modal
        title="Jadval qo'shish"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="select__table">
          <SelectTable />
          <SelectTable />
          <SelectTable />
        </div>
      </Modal>
    </div>
  );
};

export default TimeTable;
