import React from "react";
import { NavLink } from "react-router-dom";
import './group.scss'

const Group = () => {
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1>Guruhlar ro'yhati</h1>
                <NavLink to="/group" className='teacher' activeclassname='active'>
                    Guruh qo'shish                  
                </NavLink>
            </div>
        </>
    )
}

export default Group