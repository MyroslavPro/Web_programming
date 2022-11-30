import React from 'react';
import CardStyled from './Card.styled';


const Card = (props) => {
    return(
    <CardStyled>
        <img src={props.image} alt="Cool Items"/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </CardStyled>
);  
};

export default Card;