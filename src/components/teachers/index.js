import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import "./teachers.scss";
import { Data } from "./Data";
import {v4 as uuid} from "uuid"

const Teachers = () => {
  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };  

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };


  const [name, setName] = useState('')
  const [specialist, setSpecialist] = useState('')
  const [data, setData] = useState('')

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const ids = uuid();
    let uniqueId = ids.slice(0,8)

    let a = name,
        b = specialist,
        c = data

    Data.push({id: uniqueId, name :  a, specialist : b, data : c})

    history("/")
  }

  return (
    <>
      <Modal
        open={open}
        onOk={handleSubmit}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h1 className="teacher__title">O'qituvchi haqida ma'lumot kiriting</h1>
        <form className="modal__form" action="#">
          <input
            className="modal__input"
            type="text"
            placeholder="O'qituvchining ism-familiyasi"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="modal__input"
            type="text"
            placeholder="Mutaxassisligi"
            onChange={(e) => setSpecialist(e.target.value)}
          />
          <input className="modal__input" type="text" placeholder="Ish vaqti"    onChange={(e) => setData(e.target.value)}/>
        </form>
      </Modal>

      <div className="d-flex justify-content-between mb-4">
        <h1>O'qituvchilar ro'yhati</h1>
        <button
          onClick={showModal}
          className="teachers"
          activeclassname="active"
        >
          O'qituvchi qo'shish
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Ismi-familyasi</th>
            <th>Mutaxasisligi</th>
            <th>Ish vaqti</th>
          </tr>
        </thead>
        <tbody>
            {
                Data && Data.length > 0 
                ?
                Data.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.specialist}</td>
                            <td>{item.data}</td>
                        </tr>
                    )
                })
                :
                'No data available'
            }
        </tbody>
      </table>
    </>
  );
};

export default Teachers;
