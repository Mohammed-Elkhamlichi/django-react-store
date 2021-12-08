import React from "react";
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css.map";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css.map";

const Navbar = () => {
    return (
        <div className='bg-success text-light'>
            <nav className='navbar'>
                <a className='logo' href='/'>
                    Mohammed Elkhamlichi
                </a>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About US</a>
                    </li>
                    <li>
                        <a href='/'>Contact US</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
