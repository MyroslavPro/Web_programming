import React from 'react';
import CardInCart from './CardInCart/CardInCart';
import { CartWrapper } from './Cart.styled';
import { useNavigate } from "react-router-dom";
import "../../components/ViewButton/View.css";
import { useSelector } from 'react-redux';


export default function Cart(){
    const totalPrice = useSelector((state)=>state.totalItemsPrice)
    const navigate = useNavigate();
    const items = useSelector(state => state.itemsInCart)

    return(
    <CartWrapper>
        <h1 style={{color:'white',textShadow:"1px 1px black"}}>Shopping cart</h1>
        
        {items.map((item) => <CardInCart key={item.id} item={item} /> )}

        <div className='totalPrice'>
            <p>Total amount: <span>${totalPrice}</span></p>
        </div>
        
        <div className='buttons'>
            <button className="view-more white" onClick={()=>navigate("/catalog")}>Back to Catalog</button>
            <button className="view-more" >Continue</button>
        </div>
    </CartWrapper>
    );
}
