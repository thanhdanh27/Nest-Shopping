import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Footer from './components/Footer/index';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import DetailsPage from './pages/Details';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const MyContext = createContext();

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

    const [productReviews, setProductReviews] = useState([]);
    useEffect(() => {
        getDataReviews('http://localhost:3000/productReviews');
    }, []);

    const getDataReviews = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setProductReviews(response.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const [cartItems, setCartItems] = useState([]);

    const addToCart = async (item) => {
        try {
            await axios.post('http://localhost:3000/cartItems', item).then((response) => {
                if (response !== null) {
                    setCartItems([...cartItems, response.data]);
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    const [itemCartDelete, setItemCartDelete] = useState([]);
    const deleteItemCart = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/cartItems/${id}`).then((response) => {
                if (response !== null) {
                    setItemCartDelete([...itemCartDelete, response.data]);
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    const emptyItemCart = () => {
        setCartItems([]);
    };

    const value = {
        addToCart,
        deleteItemCart,
        emptyItemCart,
    };

    return (
        productsData.length !== 0 && (
            <MyContext.Provider value={value}>
                <BrowserRouter>
                    <Header data={productsData} itemCartDelete={itemCartDelete} cartItem={cartItems} />
                    <Routes>
                        <Route path="/" element={<Home data={productsData} />} />
                        <Route path="/cat/:id1" element={<Listing data={productsData} single={true} />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/cat/:id1/:id2" element={<Listing data={productsData} single={false} />} />
                        <Route
                            path="/product/:id"
                            element={<DetailsPage data={productsData} reviews={productReviews} />}
                        />
                        <Route path="/cart" element={<Cart itemCartDelete={itemCartDelete} />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </MyContext.Provider>
        )
    );
}

export default App;
export { MyContext };
