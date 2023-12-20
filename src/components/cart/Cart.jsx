import React from 'react'
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({cart, setCart}) => {
    return (
      <main className='cart'>
        {
            cart.length === 0 && 
            <div>
              <div className='empty-cart'>
                <h2>You haven't add product yet</h2>
                <div className='btns'>
                    <Link to='/games'><button>Add Game</button></Link>
                    <Link to='/console'><button>Add Console</button></Link>
                </div>
                </div>
            </div>
        }

        <div className='container'>
            {
              cart.map((cur) =>
              {
                return(
                  <div>
                    <div className='wrapper'>
                      <div className='img_box'>
                        <img src={cur.image} alt={cur.name} />
                      </div> 
                      <div className='details'>
                        <div className='info'>
                          <h2>{cur.name}</h2>
                          <p>Price: {cur.price}₸</p>
                          <p>{cur.description}</p>
                          <button>Buy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </main>
    )
}

export default Cart;