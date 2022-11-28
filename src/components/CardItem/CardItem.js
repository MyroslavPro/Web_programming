import React from 'react';
import CardItemStyled from './CardItem.styled';
import "../ViewButton/View.css"
import Image from "../../images/items.jpg";
import { NavLink } from 'react-router-dom'; 

const CardItem = ({props}) => {

    return(
    <CardItemStyled>
        <img src={Image} alt="Card item"/>
        <h3>{props.name}</h3>
        <p>Aliquam aliquam iaculis turpis, sed placerat nisi sollicitudin sit amet. Ut et diam enim. </p>
        <footer>
            <p><b>${props.price}</b></p>
            <NavLink key={props.id} className="view-more" to={`/item/${props.id}`}>View more</NavLink>
        </footer>
    </CardItemStyled>
);  
};


export default CardItem;

