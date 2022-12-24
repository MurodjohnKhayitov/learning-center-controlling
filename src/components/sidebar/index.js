import React from "react";
import { NavLink } from "react-router-dom";
import './sidebar.scss'

const Sidebar = () => {
    return(
        <nav>
            <div className="sidebar">
                <ul className="sidebar__menu">
                    <li>
                        <NavLink to='/' activeclassname='active'>
                            <span>
                                <i className="fas fa-home"></i>
                            </span>
                            Bosh sahifa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/react' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Frontend(React JS)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/angular' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Frontend(Angular JS)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/vue' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Frontend(Vue JS)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/node' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Backend(Node Js)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/python' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Backend(Python)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/java' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Backend(Java)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/uxui' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            UX/UI design
                        </NavLink>
                    </li>
                    <hr />
                    <li>
                        <NavLink to='/timetable' className='mt-1' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Dars jadvali
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar