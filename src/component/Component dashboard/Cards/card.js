import React from 'react';
import DashCard from '../../maindash/Card/card';
import './card.css';

const CardDash = () => {
    return(
        <div className='cardDash'>
            <div className='cardDashTitle'>Card Dashboard</div>
            <DashCard/>
            <BasicCard/>
        </div>
    )
}

export default CardDash ;

const BasicCard = () => {

    return(
        <div className='basicCard'>
            <div className='basicCardtitle'>Default Card Example</div>
            <div className='basicCardBody'>
                This card uses Bootstrap's default styling with no utility classes added. 
                Global styles are the only things modifying the look and feel of this default card example.
            </div>
        </div>
    )
}