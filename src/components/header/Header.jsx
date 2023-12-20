import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div class="logo">GamesWorld</div>
        <nav>
            <ul class="menu">
                <li class="menu-item"><Link to='/' class="link active">Main</Link></li>
                <li class="menu-item"><Link to='/games' className='link'>Games</Link></li>
                <li class="menu-item"><Link to='/console' className='link'>Consoles</Link></li>
                <li class="menu-item"><Link to='/cart' className='link'>Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;