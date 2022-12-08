import React from "react";
import { NavLink } from "react-router-dom";
import './buttons.scss'

const Buttons = () => {
    return(
        <>
            <div className="buttons">
                <NavLink to="/teachers" activeclassname='active'>
                    O'qituvchilar              
                </NavLink>
                <NavLink to="/group" activeclassname='active' className='group'>
                    Guruhlar
                </NavLink>
                <NavLink to="/room" activeclassname='active' className='room'>
                    Xonalar                   
                </NavLink>
            </div>
        </>
    )
}

export default Buttons