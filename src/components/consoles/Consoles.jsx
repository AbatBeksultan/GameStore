import React, { useState } from 'react'
import ConsoleProduct from '../Products_console';
import './Consoles.css';

const Consoles = ({AddConsole}) => {
    const[add, setAdd] = useState(ConsoleProduct)
    const All = () =>
    {
        setAdd(ConsoleProduct)
    }

  return (
    <main>
        <div>
            {
                add.map((cur) =>
                {
                    return(
                        <div class="product-container">
                            <section class="product">
                                <a href="console1.html">
                                    <img src={cur.image} alt={cur.name} />
                                    <h2>{cur.name}</h2>
                                    <p>
                                        Price: {cur.price}т
                                    </p>
                                </a>
                                <button>Buy Now</button>
                                <button onClick={() => AddConsole(cur)}>Add to Cart</button>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    </main>
  )
}

export default Consoles;