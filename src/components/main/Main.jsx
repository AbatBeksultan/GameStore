import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <main>
        <section class="new-releases">
            <div class="new-release-details">
                <h2>A NEW ERA OF THE ICONIC FRANCHISE!</h2>
                <p>Timeline restart, what NetherRealm Studio have changed in the new installment of the legendary franchise!</p>
                <div class="cta-container">
                    <Link to="/games" class="cta-button">More</Link>
                </div>
            </div>
            <div class="new-release-image">
                <img src="images/hero.jpg" alt="Новинка" />
            </div>
        </section>
        <section class="discount">
            <div class="discount-image">
                <img src="images/discount.jpg" alt="Скидка" />
            </div>
            <div class="discount-details">
                <h2>SUPER DISCOUNT ON CONSOLE!</h2>
                <p>Discount on PlayStation 5 in honor of the first midterm! You can find out more by clicking the button below</p>
                <div class="cta-container1">
                    <Link to="/console" class="cta-button">More</Link>
                </div>
            </div>
        </section>
        <hr class="full-width-line"></hr>
    </main>
  )
}

export default Main;