/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "../timeTable.scss";


const ModalInfo = ({teachers,courses,rooms}) => {
 
    const [open, setOpen] = useState(false);

    const [selectedTeachers, setSelectedTeachers] = useState([])
    const [selectedCourses,setSelectedCourses] = useState([])
    const [selectedRooms,setSelectedRooms] = useState([])

    // 1
    const handleChangeTeachers = (e) => {
        const {name,checked} = e.target
        setSelectedTeachers(item => {
            return(
                checked ? [...item, name] : item.filter(val => val !== name)
            )
        })
        // console.log(selectedTeachers);
    }

    // 2
    const handleChangeCourses = (e) => {
        const {name, checked} = e.target
        setSelectedCourses(item2 => {
            return(
                checked ? [...item2, name] : item2.filter(val => val !== name)
            )
        })
    }

    // 3
    const handleChangeRooms = (e) => {
        const {name,checked} = e.target
        console.log(name, checked)
        setSelectedRooms(item3 => {
            return(
                checked ? [...item3, name] : item3.filter(val => val !== name)
            )
        })
    }

    return (
        <div className='timetable'>
        <Button className='timetable' type="primary" onClick={() => setOpen(true)}>
            Jadval qo'shish
        </Button>
        <Modal
            title="Jadval ma'lumotini qo'shish"
            className='title'
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
        >
            <div className="row">
                <div className='col-4'>
                    <h3 className='mb-2'>Domlalar ro'yhati</h3>
                    <form>
                        {teachers.map((teacher) => (         
                            <div key={teacher.id}>
                                <input
                                    id={teacher.id}
                                    value={teacher.id}
                                    name={teacher.name} 
                                    type="checkbox" 
                                    checked={selectedTeachers.some(val => val === teacher.id)}
                                    onChange={handleChangeTeachers} 
                                />
                                <label htmlFor={teacher.id}>{teacher.name}</label>
                            </div>
                        ))}
                    </form>
                </div>
                <div className='col-4'>
                    <h3 className='mb-2'>Guruhlar ro'yhati</h3>
                    <form>
                        {courses.map((course) => (
                            <div key={course.id}>
                                <input 
                                    id={course.id} 
                                    value={course.id}
                                    name={course.speciality}
                                    type="checkbox"
                                    checked={selectedCourses.some(val => val === course.id)}
                                    onChange={handleChangeCourses}
                                />
                                <label htmlFor={course.id}>{course.speciality}</label>
                            </div>
                        ))}
                    </form>
                </div>
                <div className='col-4'>
                    <h3 className='mb-2'>Xonalar ro'yhati</h3>
                    <form>
                        {rooms.map((item) => (
                            <div key={item.id}>
                                <input
                                    id={item.id}
                                    value={item.id}
                                    name={item.room}
                                    type="checkbox"
                                    checked={selectedRooms.some(val => val === item.id)}
                                    onChange={handleChangeRooms}
                                />
                                <label htmlFor={item.id}>{item.room}</label>
                            </div>
                        ))}
                    </form>   
                </div>
            </div>  

        </Modal>
        </div>
    );
};
export default ModalInfo