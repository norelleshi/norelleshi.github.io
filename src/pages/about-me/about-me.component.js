import React from 'react';

import './about-me.styles.scss';
import videoSource_1 from '../../assets/video.mp4';
import videoSource_2 from '../../assets/video.webm';
import profile_photo from '../../assets/profile_photo.png';

const AboutMePage = () => (
    <div className='about-me'>
        <div className='bg-video'>
            <video autoPlay='autoplay' loop='loop' muted className='bg-video__content'>
                <source src={videoSource_1} type='video/mp4' />
                <source src={videoSource_2} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className='content dark-gray'>
            <h1 className='title'>About Me</h1>
			<img className='profile-photo' src={profile_photo} alt="Norelle Shi" />        					
            <p>
                Ying-Li Shih (Norelle), Full Stack Developer with an affinity for JavaScript. 
                
            </p>
        </div>
    </div>
)

export default AboutMePage;