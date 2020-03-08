import React from 'react';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className='options'>
            <div className='option'>
                MY WORK
            </div>
            <div className='option'>
                ABOUT ME
            </div>
        </div>
    </div>
)

export default Header;