import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css.map";
import styles from "./IndexStyle";
import Footer from "./components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Container from '../src/components/Container/Container'

const Index = () => {
    return (
        <React.Fragment>
            <div style={styles.dev}>
                <Navbar />
                <Container />
                <Footer />
            </div>
        </React.Fragment>
    );
};

ReactDom.render(<Index />, document.getElementById("root"));
