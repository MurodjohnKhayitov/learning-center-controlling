import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "../timeTable.scss";

const ModalInfo = () => {

    const teachers = [
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

    
  const [teacher, setTeacher] = useState();
  const [open, setOpen] = useState(false);
  
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
                <ul>
                    {teachers.map(teacher => {
                        const {id, ...teacherInfo} = teacher
                            return(
                                <li key={id}>
                                    <form>
                                        <div >
                                            <input name="name" type="checkbox" id={id} className='checkbox'  onChange={(e) => setTeacher(e.target.value)}/>
                                            <label className='' for={id}>{teacherInfo.name}</label>
                                        </div>
                                    </form>
                                </li>
                            )
                        })}
                </ul>    
            </div>
            <div className='col-4'>
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
            </div>
        </div>  

      </Modal>
    </div>
  );
};
export default ModalInfo