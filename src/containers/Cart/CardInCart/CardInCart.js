import React, { useState } from 'react';
import { CardInCardStyled } from './CardInCart.styled';
import Image from '../../../images/items.jpg';
import { changedCounter, removeItemInCart } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

export default function CardInCart({item}){
    const [count,setCount] = useState(1);
    const dispatch = useDispatch();

    const addCount = () => {
        setCount(count+1);
        dispatch(changedCounter(item,count+1));
    };

    const lowerCount = () => {
        if (count > 1){
            setCount(count-1)
            dispatch(changedCounter(item,count-1));
        }
    };

    return(
    <CardInCardStyled>
        <div className='itemDescription'>
            <img src={Image} alt="Lots of vintage items"/>
            <h4> {item.name} </h4>
        </div>
        <div className='countOfCurrentItems' >
            <button onClick={()=>lowerCount()}>-</button>
            <p>{count}</p>
            <button onClick={()=>addCount()}>+</button>
            <button onClick={()=>dispatch(removeItemInCart(item))} className='delete-btn'></button>
        </div>
        <p style={{marginRight:"2em"}}>${item.price}</p>
    </CardInCardStyled>
    );
}
