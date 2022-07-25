import React from 'react';
import './Footer.css';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg'
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
    <div className='footer'>
        <hr/>
            <div className='footer-adaptive'>
                <div className='left'>
                    <div className='footer-info'>
                        <div className='products'>
                            <h4>Продукция</h4>
                            <Link to='/catalog/'><p>Кепки</p></Link>
                            <a href="/"><p>Шапки</p></a>
                            <a href="/"><p>Панамки</p></a>
                            <a href="/"><p>Кастомизация</p></a>
                            <a href="/"><p>Другая продукция</p></a>
                            <a href="/"><p>Эксклюзив</p></a>
                        </div>
                        <div className='about-company'>
                            <h4>О компании</h4>
                            <a href="/"><p>О нас</p></a>
                            <a href="/"><p>Контакты</p></a>
                        </div>
                    </div>

                    <div className='subscribe'>
                        <h4>Подписаться на новинки</h4>
                        <form action="" className='form'>
                            <input type="text" placeholder='Email address' className='email-text' />
                            <button>
                                <a href="/"><img className='submit' src={require('../footer/images/sub.png')} alt="sub"/></a>
                            </button>
                        </form>
                    </div>
                </div>
                <hr className='hr-adap'/>
                <div className='cards'>
                    <div className='card-style'>
                        <a href="/"><img className='vector' src={require('../footer/images/vector.png')} alt="vector"/></a>
                        <a href="/"><img className='mastercard' src={require('../footer/images/mastercard.png')} alt="master"/></a>
                        <a href="/"><img className='visa' src={require('../footer/images/visa.png')} alt="visa"/></a>
                    </div>
                    <h4>+996 755 999820</h4>
                </div>
            </div>

        <div className='second'>
            <div className='main'>
                <div className='logo'>
                    <div className='logo-img'>
                        <a href="/"><img className='logo-img-footer' src={require('../header/header-img/logo.png')} alt="logo"/></a>
                    </div>
                    <div className='logo-text'>
                        <h6>CUSTOM CAPS</h6>
                        <p>магазин кепок</p>
                    </div>
                </div>
                    <div className='icons'>
                        <div className='oval'>
                            <a href="https://www.instagram.com/"><img className='iconsOfFooter' src={instagram} alt="instagram"/></a>
                        </div>
                        <div className='oval'>
                            <a href="https://www.facebook.com/"><img className='iconsOfFooter' src={facebook} alt="facebook"/></a>
                        </div>
                        <div className='oval'>
                            <a href="https://www.twitter.com/"><img className='iconsOfFooter' src={twitter} alt="twitter"/></a>
                        </div>
                    </div>
                </div>
            <p className='cursive'>© Copyright 2019 - Lift Media</p>
        </div>
    </div>
    );
}

export default Footer;