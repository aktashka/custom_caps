import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import withCapsService from "../hoc";

import SearchPanel from "./search-panel/SearchPanel";
import './header.css';


const Header = () => {

    return (
        <div className='header-container'>
            <div className='d-flex header-in'>
                <a href='/'>
                    <img className='logo-img-header' src={require('./header-img/logo.png')} alt={'logo-img'} ></img>
                </a>
                <ul className="list-container d-flex">
                    <li className='list-group-a'>
                        <a className='list-group-a' href='/catalog/'> Каталог </a>
                    </li>
                    <li className='list-group-a list-group-a-adap'>Кастомные</li>
                    <li className='list-group-a'><a className='list-group-a' href='/#brand'>Бренды</a></li>
                    <li className='list-group-a'><a className='list-group-a' href='/#aboutUs'>О нас</a></li>
                </ul>
                <SearchPanel />
                <Link to='/cart/'>
                    <img className='cart-img' src={require('./header-img/shop-cart.png')} alt={'cart-img'}></img>
                </Link>
                <i className="fa-solid fa-bars"></i>
            </div>
            <hr />
        </div>
    );
};

export default withCapsService(Header);