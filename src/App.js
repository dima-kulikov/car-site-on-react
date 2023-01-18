import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Page from './pages/page';
import Shop from './pages/shop';
import Product from './pages/Product'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {
  return (
    <>
    <Header/>
    <div className='wrapper'>
     
     
      {/* <Shop/> */}
      <Routes>
        <Route path="/" element={ <Page img='images/img-1.jpg' title='Головна сторінка'/>}/>
        <Route path="/shop" element={ <Shop img='images/img-2.jpg' title='Магазин'/>}/>
        <Route path="/products" element={ <Product img='images/img-3.jpg' title='Продукти'/>}/>
        <Route path="/about" element={ <About img='images/img-4.jpg' title='О нас'/>}/>
        <Route path="/contacts" element={ <Contacts img='images/img-5.jpg' title='Контакти'/>}/>
      </Routes>
    </div> 
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=AGeatf7pUeE&t=1929s
