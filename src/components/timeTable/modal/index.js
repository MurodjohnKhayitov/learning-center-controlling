/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "../timeTable.scss";

import useDataContext from "../../../Hooks/DataHook";

const ModalInfo = ({ teachers, courses, rooms }) => {
  const [open, setOpen] = useState(false);

  const [selectedTeachers, setSelectedTeachers] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [data, setdata] = useDataContext();

  // setdata(selectedTeachers,selectedCourses,selectedRooms)
  // console.log(data)

  // 1
  const handleChangeTeachers = (e) => {
    const { id, checked } = e.target;
    setSelectedTeachers((item) => {
      return checked ? [...item, id] : item.filter((val) => val !== id);
    });   
  };
  // console.log(selectedTeachers);

  // 2
  const handleChangeCourses = (e) => {
    const { id, checked } = e.target;
    setSelectedCourses((item2) => {
      return checked ? [...item2, id] : item2.filter((val) => val !== id);
    });
  };
  // console.log(selectedCourses);

  // 3
  const handleChangeRooms = (e) => {
    const { id, checked } = e.target
    setSelectedRooms((item3) => {
      return checked ? [...item3, id] : item3.filter((val) => val !== id);
    });
  }
  console.log(selectedRooms);

  const handleSubmit = () => {
    let data = [selectedTeachers, selectedCourses, selectedRooms];
    console.log(data)
  }

  return (
    <div className="timetable">
      <Button
        className="timetable"
        type="primary"
        onClick={() => setOpen(true)}
      >
        Jadval qo'shish
      </Button>
      <Modal
        title="Jadval ma'lumotini qo'shish" 
        className="title"
        centered
        open={open}
        onOk={() => {
            setOpen(false)
            handleSubmit()
        }}
        onCancel={() => setOpen(false)}
        width={1000}
      > 
      <form>
        <div className="row">   
            <div className="col-4">
              <h3 className="mb-2">Domlalar ro'yhati</h3>
              {teachers.map((teacher) => (
                <div className="form__elements" key={teacher.id}>
                  <input
                    id={teacher.id}
                    value={teacher.id}
                    name={teacher.id}
                    type="checkbox"
                    checked={selectedTeachers.some((val) => val === teacher.id)}
                    onChange={handleChangeTeachers}
                  />
                  <label htmlFor={teacher.id}>{teacher.name}</label>
                </div>
              ))}
            </div>
            <div className="col-4">
              <h3 className="mb-2">Guruhlar ro'yhati</h3>
              {courses.map((course) => (
                <div className="form__elements" key={course.id}>
                  <input
                    id={course.id}
                    // value={course.id}
                    name={course.speciality}
                    type="checkbox"
                    checked={selectedCourses.some((val) => val === course.id)}
                    onChange={handleChangeCourses}
                  />
                  <label htmlFor={course.id}>{course.speciality}</label>
                </div>
              ))}
            </div>
            <div className="col-4">
              <h3 className="mb-2">Xonalar ro'yhati</h3>
              {rooms.map((item) => (
                <div className="form__elements" key={item.id}>
                  <input
                    id={item.id}
                    value={item.id}
                    name={item.room}
                    type="checkbox"
                    checked={selectedRooms.some((val) => val === item.id)}
                    onChange={handleChangeRooms}
                  />
                  <label htmlFor={item.id}>{item.room}</label>
                </div>
              ))}
            </div>
        </div>
        </form>
      </Modal>
    </div>
  );
};
export default ModalInfo;
