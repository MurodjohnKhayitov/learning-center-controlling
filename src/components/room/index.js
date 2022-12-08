import React from "react";
import { NavLink } from "react-router-dom";
import './room.scss'

const Room = () => {
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1>Xonalar ro'yhati</h1>
                <NavLink to="/room" className='teacher room' activeclassname='active'>
                    Xona qo'shish                  
                </NavLink>
            </div>

        </>
    )
}

export default Room