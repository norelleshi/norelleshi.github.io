import React from 'react';

import './mywork-item.styles.scss';

const MyworkItem = ({ imageUrl, tags }) => (
    <div className='work-item br3 bw2 shadow-5'>
        <img className='image' alt='robots' src={imageUrl} />
        <div className='tags-bg'>
            <span className='tags'># {tags}</span>
        </div>
        <div>
            <button type='button' className='button_1' href={imageUrl}>Project</button>
            <button type='button' className='button_2'>Github</button>
        </div>

    </div>
)

export default MyworkItem;

