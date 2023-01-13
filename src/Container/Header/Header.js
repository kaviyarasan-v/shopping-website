import React from 'react';
import home from "../../assets/img/sm_5afc6f6f0d492.jpg";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header class="navbar navbar-expand-lg navbar-light" id="navbar">
            <div class="container" >
                <div class="hero__search__phone__icon" onClick={() => navigate('/')}>
                    <i class="fa fa-home " aria-hidden="true"></i>
                </div>
                <h3>{location.pathname === '/' ? 'Products' : location.pathname === '/cart' ? 'Cart' : 'Product Details'}</h3>
                <div class="hero__search">
                    <div class="hero__search__phone">
                        <div class="hero__search__phone__icon" onClick={() => navigate('/cart')}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div class="hero__search__phone__text">
                            <h5>999 4440 444 </h5>
                            <span>support 24/7 time</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;