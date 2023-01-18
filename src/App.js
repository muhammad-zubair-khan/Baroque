// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Msection from './components/Msection';
import Snav from './components/Snav';
import Cards from './components/Cards'
import Home from './components/Home'
import Collections from './components/Collections';
import Sfooter from './components/Sfooter';
import Footer from './components/Footer'
import Products from './components/Products';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import  { useState } from 'react'
// import data from './data';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Collections" exact element={<Collections/>}/>
          {/* <Route path="/Collection/Unstiched" exact element={<Collections/>}/> */}
          <Route path="/Products" exact element={<Products/>}/>

        </Routes>
    </div>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
