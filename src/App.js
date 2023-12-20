import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Games from './components/games/Games';
import Consoles from './components/consoles/Consoles';
import Cart from './components/cart/Cart';

const App = () => {
  const [cart, setCart] = useState([])

    const AddGame = (product) => {
      const exist = cart.find((x) => {
        return x.id === product.id
      })
      if (exist) {
        alert("This product already in Cart")
      }
      else {
        setCart([...cart, { ...product}])
        alert("You added game to Cart!")
      }
    }

    const AddConsole = (product) => {
      const exist = cart.find((x) => {
        return x.id === product.id
      })
      if (exist) {
        alert("This product already in Cart")
      }
      else {
        setCart([...cart, { ...product}])
        alert("You added console to Cart")
      }
    }

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/games' element={<Games AddGame={AddGame} />} />
          <Route path='/console' element={<Consoles AddConsole={AddConsole} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;