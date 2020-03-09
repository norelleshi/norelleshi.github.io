import React from 'react';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => (
    <nav className='db dt-l w-100 border-box pa3 ph5-l'>
        <div className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l'>
            <img src={logo} className="dib h3 br-100" alt="logo" />
        </div>
        <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
            <div className='link dim dark-gray f6 f5-l dib mr3 mr4-l'>
                MY WORK
            </div>
            <div className='link dim dark-gray f6 f5-l dib mr3 mr4-l'>
                ABOUT ME
            </div>
        </div>
    </nav>
)

export default Header;