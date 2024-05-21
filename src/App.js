import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Footer from './components/Footer/index';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import DetailsPage from './pages/Details';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [productsData, setProductData] = useState([]);
    useEffect(() => {
        getData('http://localhost:3000/productData');
    }, []);
    const getData = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setProductData(response.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        productsData.length !== 0 && (
            <BrowserRouter>
                <Header data={productsData} />
                <Routes>
                    <Route path="/" element={<Home data={productsData} />} />
                    <Route path="/cat/:id" element={<Listing data={productsData} single={true} />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cat/:id/:id" element={<Listing data={productsData} single={false} />} />
                    <Route path="/cat/:id/:id:id" element={<DetailsPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    );
}

export default App;
