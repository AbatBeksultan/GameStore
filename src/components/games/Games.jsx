import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import GameProduct from '../Products_game';
import './Games.css';

const Games = ({AddGame}) => {
    const[add, setAdd] = useState(GameProduct)

    const All = () =>
    {
        setAdd(GameProduct)
    }

  return (
    <main>
        <div>
            {   
                add.map((cur) => 
                {
                    return(
                        <>
                        <div class="product-container">
                            <section class="product">
                                <Link to="game1.html">
                                    <img src={cur.image} alt={cur.name} />
                                    <h2>{cur.name}</h2>
                                    <p>Price: {cur.price}т</p>
                                </Link>
                                <button>Buy Now</button>
                                <button onClick={() => AddGame(cur)}>Add to Cart</button>
                            </section>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </main>
  )
}

export default Games;