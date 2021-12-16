import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Container from "../src/components/Container/Container";
import PageNotFound from "./components/Error/PageNotFound";
import "./Index.css";
import ProductDetail from "./components/Container/product/ProductDetail";

const Index = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <div className='index'>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Container />}></Route>
                        <Route
                            path='/product/:id/detail'
                            element={<ProductDetail />}
                        />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </React.StrictMode>
        </BrowserRouter>
    );
};

ReactDom.render(<Index />, document.getElementById("root"));
