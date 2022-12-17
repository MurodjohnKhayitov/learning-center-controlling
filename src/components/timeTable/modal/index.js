import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import "../timeTable.scss";

const ModalInfo = () => {

    const allTeachers = [
        {
            id: "1",
            name: "Ali Valiyev",
            speciality: "Frontend"
        },
        {
            id: "2",
            name: "Valiyev Ali",
            speciality: "Backend"
        },
        {
            id: "3",
            name: "Jurayeva Sabina",
            speciality: "Flutter"
        },
    ]
 
    const [open, setOpen] = useState(false);
    const [teachers, setTeachers] = useState([])

    useEffect(()=> {
        setTeachers(allTeachers)
    },[])

    const handleChange = (e) => {
        const {name, checked} = e.target
        console.log(name,checked);
        let tempTeacher = teachers.map((teacher) =>{
            return(
                teacher.name === name ? { ...teacher, isChecked:checked } : teacher
            )
        })
        setTeachers(tempTeacher)
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
                        {teachers.map((teacher,id) => (
                            <div key={id}>
                                    <input 
                                        name={teacher.name} 
                                        type="checkbox" 
                                        id={id} 
                                        className='checkbox' 
                                        checked={teacher?.isChecked || false}
                                        onChange={handleChange}
                                    />
                                    <label className='' htmlFor={id}>{teacher.name}</label>
                            </div>
                        ))}
                    </form>
                </div>
                {/* <div className='col-4'>
                    <h3 className='mb-2'>Guruhlar ro'yhati</h3>
                    <ul>
                        <li >
                            <form>
                                <div >
                                    <input name="speciality" type="checkbox" id="speciality" className='checkbox'/>
                                    <label className='' for="speciality">Frontend</label>
                                </div>
                            </form>
                        </li>
                        <li >
                            <form>
                                <div >
                                    <input name="speciality" type="checkbox" id="speciality" className='checkbox'/>
                                    <label className='' for="speciality">Frontend</label>
                                </div>
                            </form>
                        </li>
                        <li >
                            <form>
                                <div >
                                    <input name="speciality" type="checkbox" id="speciality" className='checkbox'/>
                                    <label className='' for="speciality">Frontend</label>
                                </div>
                            </form>
                        </li>
                    </ul>    
                </div>
                <div className='col-4'>
                    <h3 className='mb-2'>Xonalar ro'yhati</h3>
                    <ul>
                        <li >
                            <form>
                                <div >
                                    <input name="room" type="checkbox" id="room" className='checkbox'/>
                                    <label className='' for="room">Xona 11</label>
                                </div>
                            </form>
                        </li>
                        <li >
                            <form>
                                <div >
                                    <input name="room" type="checkbox" id="room" className='checkbox'/>
                                    <label className='' for="room">Xona 11</label>
                                </div>
                            </form>
                        </li>
                        <li >
                            <form>
                                <div >
                                    <input name="room" type="checkbox" id="room" className='checkbox'/>
                                    <label className='' for="room">Xona 11</label>
                                </div>
                            </form>
                        </li>
                    </ul>    
                </div> */}
            </div>  

        </Modal>
        </div>
    );
};
export default ModalInfo