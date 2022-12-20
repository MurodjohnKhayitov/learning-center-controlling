/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "../timeTable.scss";

const teachers = [
    {
        id: "1",
        name: "Ali Valiyev"
    },
    {
        id: "2",
        name: "Valiyev Ali",
    },
    {
        id: "3",
        name: "Jurayeva Sabina",
    },
]
const courses = [
    {
        id: "1",
        speciality: "Frontend"
    },
    {
        id: "2",
        speciality: "Backend"
    },
    {
        id: "3",
        speciality: "Flutter"
    },
]
const rooms = [
    {
        id: "1",
        room: "Xona 1"
    },
    {
        id: "2",
        room: "Xona 2"
    },
    {
        id: "3",
        room: "Xona 3"
    },
]

const ModalInfo = () => {
 
    const [open, setOpen] = useState(false);

    const [selectedTeachers, setSelectedTeachers] = useState([])
    const [selectedCourses,setSelectedCourses] = useState([])
    // const [selectedRooms,setSelectedRooms] = useState([])

    // 1
    const handleChangeTeachers = (e) => {
        const {name,checked} = e.target
        setSelectedTeachers(item => {
            return(
                checked ? [...item, name] : item.filter(val => val !== name)
            )
        })
        console.log(selectedTeachers);
    }

    // 2
    const handleChangeCourses = (e) => {
        const {name, checked} = e.target
        setSelectedCourses(item2 => {
            return(
                checked ? [...item2, name] : item2.filter(val => val !== name)
            )
        })
        console.log(selectedCourses)
    }

    // 3
    // const handleChangeRooms = (e) => {
    //     const {name,checked} = e.target
    //     console.log(name, checked);
    //     setSelectedRooms(
    //         item => checked 
    //             ? [...item, name] 
    //             : item.filter(val => val !== name)
    //     )
    //     // console.log(selectedRooms)
    // }

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
                                <label className='' htmlFor={teacher.id}>{teacher.name}</label>
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
                                <label className='' htmlFor={course.id}>{course.speciality}</label>
                            </div>
                        ))}
                    </form>
                </div>
                <div className='col-4'>
                    <h3 className='mb-2'>Xonalar ro'yhati</h3>
                    <form>
                    {rooms.map((item,id) => (
                            <div key={id}>
                                <input
                                    id={id}
                                    name={item.room}
                                    type="checkbox"
                                    // checked={selectedRooms.some(val => val === item.id)}
                                    // onChange={handleChangeRooms}
                                />
                                <label className='' htmlFor={item.id}>{item.room}</label>
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