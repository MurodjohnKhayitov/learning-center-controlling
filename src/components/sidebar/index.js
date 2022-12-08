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
                        <NavLink to='/foundation' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Foundation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/front' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Frontend
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/backnode' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Backend(Node Js)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/backjava' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Backend(Java)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/flutter' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Flutter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/ios' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            IOS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/android' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Android
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
                    <li>
                        <NavLink to='/kfront' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Kids Frontend
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/kback' activeclassname='active'>
                            <span>
                                <i className="fas fa-compass"></i>
                            </span>
                            Kids Backend
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar