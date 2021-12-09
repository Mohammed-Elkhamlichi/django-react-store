import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className='page_not_found'>
            <h3 className='page_not_found_headline'>Page Not Found</h3>
            <Link to='/' className='back_home_button'>
                Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;
