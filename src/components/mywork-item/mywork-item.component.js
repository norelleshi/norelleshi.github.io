import React from 'react';

import './mywork-item.styles.scss';

const MyworkItem = ({ imageUrl, tags, demoUrl, githubUrl }) => (
    <div className='work-item br3 bw2 shadow-5'>
        <img className='image' alt='robots' src={imageUrl} />
        <div className='tags-bg'>
            <span className='tags'># {tags}</span>
        </div>
        <div>
            <a type='button' className='button_1' href={demoUrl}>Project</a>
            <a type='button' className='button_2' href={githubUrl}>Github</a>
        </div>

    </div>
)

export default MyworkItem;

