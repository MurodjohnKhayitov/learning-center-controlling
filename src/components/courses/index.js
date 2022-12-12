import React from "react";
import { NavLink } from "react-router-dom";
import './courses.scss'

const Courses = ({courses}) => {
    return(
        <div className="courses">
            <div className="container">
                <div className="courses__list">
                    <div className="courses__item">
                        <div className="courses__author">
                            <div className='courses__author--img'></div>
                            <NavLink className="courses__author--name">Aliyev Vali</NavLink>
                            <NavLink className="courses__author--spec">Frontend</NavLink>
                        </div>
                        <div className="courses__info">
                            <div className="courses__top">
                                <NavLink className='courses__top--pro' to="/jadval">Jadval</NavLink>
                                <NavLink className='courses__top--time'>Davomiyligi: 22 soat</NavLink>
                                <NavLink className='courses__top--duration'>Darslar soni: 100 ta</NavLink>
                            </div>
                            <h2>Front-end mutaxassislik kursi</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis sint, error, odit quas dolor placeat quod nihil similique inventore recusandae odio praesentium cum doloremque in blanditiis doloribus voluptates excepturi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses