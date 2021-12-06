import React from "react";
import ReactDom from "react-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Container from '../src/components/Container/Container'
import './Index.css'

const Index = () => {
    return (
        <React.Fragment>
            <div className="index">
                <Navbar />
                <Container />
                <Footer />
            </div>
        </React.Fragment>
    );
};

ReactDom.render(<Index />, document.getElementById("root"));
