import React, { useState } from "react";
import { Button, Modal } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { GroupData } from "./GroupData";
import { v4 as uuid } from "uuid";

import "./group.scss"

const Group = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
 
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
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

  const [groupName, setGroupName] = useState("");
  const [numberPupil, setNumberPupil] = useState("");
  const [courseTime, setCourseTime] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = groupName,
      b = numberPupil,
      c = courseTime;

      GroupData.push({ id: uniqueId, groupName: a, numberPupil: b, courseTime: c });

    history("/");
  };

  return (
    <>
      <Modal
        open={open}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h1 className="teacher__title">Guruh haqida ma'lumot kiriting</h1>
        <form className="modal__form" action="#">
          <input
            className="modal__input"
            type="text"
            placeholder="Guruh nomi"
            onChange={(e) => setGroupName(e.target.value)}
          />
          <input
            className="modal__input"
            type="text"
            placeholder="O'quvchilar soni"
            onChange={(e) => setNumberPupil(e.target.value)}
          />
          <input
            className="modal__input"
            type="text"
            placeholder="Dars vaqti"
            onChange={(e) => setCourseTime(e.target.value)}
          />
        </form>
      </Modal>

      <div className="d-flex justify-content-between mb-4">
        <h1>Guruhlar  ro'yhati</h1>
        <button
          onClick={showModal}
          className="group"
          activeclassname="active"
        >
          Guruh qo'shish
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Guruh Nomi</th>
            <th>O'quvchilar soni</th>
            <th>Dars vaqti</th>
          </tr>
        </thead>
        <tbody>
          {GroupData && GroupData.length > 0
            ? GroupData.map((item) => {
                return (
                  <tr>
                    <td>{item.groupName}</td>
                    <td>{item.numberPupil}</td>
                    <td>{item.courseTime}</td>
                  </tr>
                );
              })
            : "No data available"}
        </tbody>
      </table>

    
    </>
  );
};

export default Group;
