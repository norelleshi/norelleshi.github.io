import React from 'react';

import MyworkItem from '../../components/mywork-item/mywork-item.component';

import './mywork.styles.scss';
import { WORK_DATA } from './WORK_DATA';

class MyworkPage extends React.Component {
    constructor() {
        super() 

        this.state = {
            workItems: WORK_DATA
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