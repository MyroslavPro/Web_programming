import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ItemsContext } from '../ItemsContext/ItemContext';
import ItemPageStyled, { ContainerCharacteristicsStyled, FooterItem } from './ItemPage.styled';
import '../../components/ViewButton/View.css'


let findId =  (id) => {
    let { items } = useContext(ItemsContext);
    let foundItem = items.find(item => item.id === id);

    return foundItem;
}

export default function ItemPage(){
    let { id } = useParams();
    let item =findId(parseInt(id));      
    return (<>
    <ItemPageStyled>
        <div className="classItemDescription">
            <img src={item.image} alt="item"/>
            <div className="info">

                <h2>{item.name}</h2>
                <p> {item.description}</p>
                <p>A wonderful serenity has taken possession of my entire soul, <br/> like these sweet mornings of spring which I enjoy with my whole heart.
                    <br/> I am alone, and feel the charm of existence in this spot,<br/>  which was created for the bliss of souls like mine. </p>
                
                <ContainerCharacteristicsStyled>  
                    <p>Country  <span>{item.country}</span></p>
                    <p>Provider  <span style={{background:"lightblue"}}>{item.provider}</span></p>
                </ContainerCharacteristicsStyled>
            </div>
        </div>
        <FooterItem>
            <h3>Price: ${item.price}</h3>
            <div className="buttons-footer">
                <NavLink className="view-more" to="/catalog">Back</NavLink>
                <button>Add to Cart</button>
            </div>            
        </FooterItem>
    </ItemPageStyled></>
    );
}