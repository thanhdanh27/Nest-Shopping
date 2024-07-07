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
import Loader from './assets/img/loader.gif';
import data from './data/data.js';
import './reponsive.css';

const MyContext = createContext();

function App() {
    const [productsData, setProductData] = useState([]);
    const [isLogin, setIsLogin] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // getData('http://localhost:3000/productData');

        const is_Login = localStorage.getItem('isLogin');
        setIsLogin(is_Login);
        setProductData(data.productData);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const getData = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setProductData(response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const [productReviews, setProductReviews] = useState([]);
    useEffect(() => {
        // getDataReviews('http://localhost:3000/productReviews');
        setProductReviews(data.productReviews);
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
    const signOut = () => {
        localStorage.removeItem('isLogin');
        setIsLogin('false');
    };

    const signIn = () => {
        localStorage.setItem('isLogin', 'true');
        setIsLogin('true');
    };

    const value = {
        addToCart,
        deleteItemCart,
        emptyItemCart,
        isLogin,
        signOut,
        signIn,
    };

    return (
        productsData.length !== 0 && (
            <MyContext.Provider value={value}>
                <BrowserRouter>
                    {/* {loading === true && (
                        <div className="loader">
                            <img src={Loader} alt="loader" />
                        </div>
                    )} */}
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
