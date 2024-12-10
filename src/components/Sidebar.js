import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { FaBars, FaCaretRight } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar

    const links = [
        "Text box",
        "Checkbox",
        "Button",
        "Web links",
        "Drop down",
        "Calander",
        "Broken Images",
        "Java Script Alert",
        "Iframe",
        "Nested Iframe",
        "Multiple windows",
        "Swipe from right to left",
        "Double click",
        "Drag and Drop",
        // "Mouse Over",
        // "Bad SSL",
        "Scroll",
        "Table"
    ];

    return (
        <>
            <div className={`sidebar-container ${isOpen ? '' : 'closed'}`}>

                <div className="sidebar-header">
                    <button
                        className="toggle-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FaBars />
                    </button>
                    <NavLink to={`/`} className="logo">
                        <h2 className="heading">Selenium-Practice</h2>
                    </NavLink>
                </div>
                <div className={`sidebar ${isOpen ? '' : 'hidden'}`}>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link === "Text box" ? "/" : `/example/${link.replace(/\s+/g, '-').toLowerCase()}`}
                                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                                >
                                    <FaCaretRight className="link-icon" />
                                    <span>{link}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Sidebar;
