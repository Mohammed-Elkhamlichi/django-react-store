import React from "react";
import { Route,BrowserRouter, Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <BrowserRouter>
            <div className='bg-success text-light'>
                <nav className='navbar'>
                    <a className='logo' href='/'>MEM</a>
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
        </BrowserRouter>
    );
};

export default Navbar;
