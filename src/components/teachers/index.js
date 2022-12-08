import React from "react";
import { NavLink } from "react-router-dom";
import './teachers.scss'

const Teachers = () => {
    return(
        <>
            <div className="d-flex justify-content-between mb-4">
                <h1>O'qituvchilar ro'yhati</h1>
                <NavLink to="/teachers/add" className='teachers' activeclassname='active'>
                    O'qituvchi qo'shish
                </NavLink>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Ismi-familyasi</th>
                        <th>Mutaxasisligi</th>
                        <th>Ish vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <NavLink to="/teachers/instructor">Aliyev Vali</NavLink>
                        </td>
                        <td>Frontend</td>
                        <td>9:00 - 18:00</td> 
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default Teachers