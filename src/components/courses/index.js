import React from "react";
import { Link, NavLink } from "react-router-dom";
import './courses.scss'

const Courses = ({courses}) => {

    const coursesArr = courses.map(course => {
        const {id, ...oneCourse} = course
        return(
            <li className="courses__list" key={id}>
                <div className="courses__item">
                    <div className="courses__author">
                        <div className='courses__author--img'>
                            <img src={require('../../assets/img/'+oneCourse.img)} alt="" />
                        </div>
                        <Link className="courses__author--name">{oneCourse.author.name}</Link>
                        <Link className="courses__author--spec">{oneCourse.author.speciality}</Link>
                    </div>
                    <div className="courses__info">
                        <div className="courses__top">
                            <Link className='courses__top--pro'>Jadval</Link>
                            <div className="courses__top--left">
                                <Link className='courses__top--time'>Davomiyligi: {oneCourse.time}</Link>
                                <Link className='courses__top--duration'>Darslar soni: {oneCourse.duration}</Link>
                            </div>
                        </div>
                        <h2>{oneCourse.course}</h2>
                        <p>{oneCourse.text}</p>
                    </div>
                </div>
            </li>
        )
    })

    return(
        <div className="courses">
            <div className="container">
                <ul>
                    {coursesArr}
                </ul>
            </div>
        </div>
    )
}
export default Courses