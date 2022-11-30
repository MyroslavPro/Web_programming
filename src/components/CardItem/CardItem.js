import React from 'react';
import CardItemStyled from './CardItem.styled';
import ViewButton from '../ViewButton/ViewButton';

const CardItem = (props) => {
    return(
    <CardItemStyled>
        <img src={props.image} alt="item"/>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <footer>
            <p><b>${props.price}</b></p>
            <ViewButton>View more</ViewButton>
        </footer>
        
    </CardItemStyled>
);  
};

export default CardItem;

