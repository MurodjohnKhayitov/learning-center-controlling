import React from "react";
import { NavLink } from "react-router-dom";
import './courses.scss'

const Courses = ({courses}) => {

    const coursesAll = courses.map(course => {
        const {id, ...oneCourese} = course
        return(
            <li className="courses__list" key={id}>
                <div className="courses__item">
                    <div className="courses__author">
                        <div className='courses__author--img'>
                            <img src={require(`../../assets/img/`+oneCourese.img)} alt="" />
                        </div>
                        <NavLink className="courses__author--name">{oneCourese.author.name}</NavLink>
                        <NavLink className="courses__author--spec">{oneCourese.author.speciality}</NavLink>
                    </div>
                    <div className="courses__info">
                        <div className="courses__top">
                            <NavLink className='courses__top--pro' to="/jadval">Jadval</NavLink>
                            <NavLink className='courses__top--time'>Davomiyligi: {oneCourese.time}</NavLink>
                            <NavLink className='courses__top--duration'>Darslar soni: {oneCourese.duration}</NavLink>
                        </div>
                        <h2>{oneCourese.course}</h2>
                        <p>{oneCourese.text}</p>
                    </div>
                </div>
            </li>
        )
    })

    return(
        <div className="courses">
            <div className="container">
                <ul>                
                    {coursesAll}
                </ul>
            </div>
        </div>
    )
}
export default Courses