import React from "react";
import ReactDom from "react-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Container from "../src/components/Container/Container";
import "./Index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Index = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <div className='index'>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Container />}></Route>
                        <Route path='/product/detail' element={<Navbar />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </React.StrictMode>
        </BrowserRouter>
    );
};

ReactDom.render(<Index />, document.getElementById("root"));
