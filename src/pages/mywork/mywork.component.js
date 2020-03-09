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
                    name: 'CROWN Clothing',
                    tags: 'react, e-commerce',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712026/portfolioImg/crownClothing.png',
                    demoUrl: 'https://norelle-crwn.herokuapp.com/',
                    githubUrl: 'https://github.com/norelleshi/crwn-clothing'
                },
                {
                    id: 2,
                    name: 'smartBrain',
                    tags: 'react, machine learning',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712025/portfolioImg/smartBrain.png',
                    demoUrl: 'https://norelleshi.github.io/smart-brain/',
                    githubUrl: 'https://github.com/norelleshi/smart-brain'
                },
                {
                    id: 3,
                    name: 'robofriends',
                    tags: 'react, AJAX',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583722475/portfolioImg/robofriends.png',
                    demoUrl: 'http://norelleshi.github.io/robofriends',
                    githubUrl: 'https://github.com/norelleshi/robofriends'
                },
                {
                    id: 4,
                    name: 'fullcampground',
                    tags: 'node.js, Express',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712025/portfolioImg/fullcampground.png',
                    demoUrl: 'https://fullcampground.herokuapp.com/',
                    githubUrl: 'https://github.com/norelleshi/fullcampground'
                },
                {
                    id: 5,
                    name: 'fullertour',
                    tags: 'Sass, RESTful API',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583712025/portfolioImg/fullertour.png',
                    demoUrl: 'https://fullertour.herokuapp.com',
                    githubUrl: 'https://github.com/norelleshi/fullertour'
                },
                {
                    id: 6,
                    name: 'myColorGame',
                    tags: 'JavaScript',
                    imageUrl: 'https://res.cloudinary.com/norelleshi/image/upload/v1583722318/portfolioImg/myColorGame.png',
                    demoUrl: 'https://mycolourgame.herokuapp.com/',
                    githubUrl: 'https://github.com/norelleshi/mycolourgame'
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