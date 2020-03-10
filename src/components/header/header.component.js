import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => {
    return (
    <nav className='header db dt-l w-100 border-box pa2 ph5-l'>
        <Link to='/react-portfolio' className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l'>
            <img src={logo} className="dib h3 br-100" alt="logo" />
        </Link>
        <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
            <Link to='/' className='link dim dark-gray f6 f5-l dib mr3 mr4-l'>
                MY WORK
            </Link>
            <Link to='/about-me' className='link dim dark-gray f6 f5-l dib mr3 mr4-l'>
                ABOUT ME
            </Link>
        </div>
    </nav>
)}

export default Header;