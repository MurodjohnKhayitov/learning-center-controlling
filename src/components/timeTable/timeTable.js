import React from 'react';
import { NavLink } from 'react-router-dom';
import './timeTable.scss'

const TimeTable = () => {
    return (
        <div className='d-flex justify-content-between align-center timetable'>
            <div className="btitle">Dars jadvali</div>
            <NavLink to="#" activeclassname='active'>
                Jadval qo'shish 
            </NavLink>
        </div>
    );
};

TimeTable.propTypes = {};

export default TimeTable;