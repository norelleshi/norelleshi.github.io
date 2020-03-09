import React from 'react';

import MyworkItem from '../../components/mywork-item/mywork-item.component';

import './mywork.styles.scss';

class MyworkPage extends React.Component {
    constructor() {
        super() 

        this.state = {
            workItems:[
                {
                    id: 1,
                    tags: 'react, e-commerce',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712026/portfolioImg/crownClothing.png'
                },
                {
                    id: 2,
                    tags: 'react, machine learning',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712025/portfolioImg/smartBrain.png'
                },
                {
                    id: 3,
                    tags: 'react, AJAX',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583722475/portfolioImg/robofriends.png'
                },
                {
                    id: 4,
                    tags: 'node.js, Express',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712025/portfolioImg/fullcampground.png'
                },
                {
                    id: 5,
                    tags: 'Sass, RESTful API',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712025/portfolioImg/fullertour.png'
                },
                {
                    id: 6,
                    tags: 'JavaScript',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583722318/portfolioImg/myColorGame.png'
                }
            ]
        }
    }

    render() {
        return (
            <div className='mywork'>
                {
                    this.state.workItems.map(({ id, ...otherSectionProps }) => (
                        <MyworkItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default MyworkPage;