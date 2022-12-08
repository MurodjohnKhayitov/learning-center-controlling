import React from "react";
import { NavLink } from "react-router-dom";
import './group.scss'

const Group = () => {
    return(
        <>
            <div className="d-flex justify-content-between mb-4">
                <h1>Guruhlar ro'yhati</h1>
                <NavLink to="/group" className='teacher group' activeclassname='active'>
                    Guruh qo'shish                  
                </NavLink>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Guruh nomi</th>
                        <th>O'quvchilar soni</th>
                        <th>Kurs vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Frontend guruhi</td>
                        <td>12</td>
                        <td>9:00 - 11:00</td> 
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Group