import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import ProductsListPage from './pages/ProductsListPage';
function App() {
    return (
        <Router>
			<div className="App">
				<Header />
					<Routes>
						<Route path='/' exact element={<ProductsListPage />} />
						<Route path='product' element={<ProductPage />} />
					</Routes>
				<Footer />
			</div>
		</Router>
    );
}

export default App;
