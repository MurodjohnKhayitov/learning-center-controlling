import React from "react";
import { NavLink } from "react-router-dom";
import './teacher.scss'
const Teacher = () => {
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1>O'qituvchilar ro'yhati</h1>
                <NavLink to="/teacher" className='teacher' activeclassname='active'>
                    O'qituvchi qo'shish                  
                </NavLink>
            </div>
        </>
    )
}

export default Teacher