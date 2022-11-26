import React from 'react';
import CardItemStyled from './CardItem.styled';
import "../ViewButton/View.css"

import { NavLink } from 'react-router-dom'; 

const CardItem = (props) => {

    return(
    <CardItemStyled>
        <img src={props.image} alt="Card item"/>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <footer>
            <p><b>${props.price}</b></p>
            <NavLink key={props.id} className="view-more" to={`/item/${props.id}`}>View more</NavLink>
        </footer>
    </CardItemStyled>
);  
};


export default CardItem;

