import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
        <div class="contacts">
            <p><Link to="https://mail.google.com/mail/u/0/#inbox" target="_blank" class="footer-soc">Google</Link></p>
            <p><Link to="https://www.instagram.com/abat.beksultan/" target="_blank" class="footer-soc">Instagram</Link></p>
            <p><Link to="https://vk.com/id323788973" target="_blank" class="footer-soc">VK</Link></p>
            <p><Link to="https://www.youtube.com/channel/UCPUUyAx_30nwInf_6IleW-g" target="_blank" class="footer-soc">Youtube</Link></p>
        </div>
    </footer>
  )
}

export default Footer;