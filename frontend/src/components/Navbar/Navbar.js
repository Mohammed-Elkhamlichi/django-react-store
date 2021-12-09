import React from "react";
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css.map";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bg-success text-light'>
            <nav className='navbar'>
                <Link className='logo' to='/'>
                    Mohammed Elkhamlichi
                </Link>
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
