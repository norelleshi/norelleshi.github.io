import React from 'react';

import './about-me.styles.scss';
// import videoSource_1 from '../../assets/video.mp4';
// import videoSource_2 from '../../assets/video.webm';
import profile_photo from '../../assets/profile_photo.png';

const AboutMePage = () => (
    <div className='about-me'>
        {/* <div className='bg-video'>
            <video autoPlay='autoplay' loop='loop' muted className='bg-video__content'>
                <source src={videoSource_1} type='video/mp4' />
                <source src={videoSource_2} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div> */}
        <div className='content dark-gray'>
            <div className='content__header'>
                <h1 className='title'>About Me</h1>
			    <img className='profile-photo' src={profile_photo} alt="Norelle Shi" />        					
            </div>
            <div className='text-box'>
                <h2 className='bio'>Ying-Li Shih (Norelle), Full Stack Developer with an affinity for JavaScript.</h2>
                <ul>
                    <span className='list_title'>What I can do:</span>
                    <br />
                    <li>Build reactive, performant, scalable web applications with <span className='keyword'>React, Redspanx, node.js</span></li>
                    <li>Use the latest <span className='keyword'>ES6+</span> JavaScript to write clean code</li>
                    <li>Build enterprise level applications and deploy to production</li>
                    <li>Understand the tradeoffs in employing different engineering solutions to a problem</li>
                    <li>Set up authentication and user accounts with firebase</li>
                    <li>Handling online payments with Stripe API</li>
                </ul>
            </div>
        </div>
    </div>
)

export default AboutMePage;