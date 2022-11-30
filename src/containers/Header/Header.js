import React from "react";
// import {HomeContainer,Authorization, Button} from "./Header.styled";
import {HeaderContainer} from "./Header.styled";
import logo from "../../images/itemsLogo.png";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import ItemPage from "../ItemPage/ItemPage";
import {
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
import Cart from "../Cart/Cart";



export default function Header(){
    return (
        <>
            <HeaderContainer>
                <img src={logo} alt="Logo Items"/>
                <ul>
                    <li>
                        <NavLink end exact to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink end exact to="/catalog" className={({ isActive }) => (isActive ? 'active' : '')}>Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink end exact to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>Cart</NavLink>
                    </li>
                </ul>
            </HeaderContainer> 
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/catalog" element={<Catalog />} /> 
                <Route path="/cart" element={<Cart/ >} /> 
                <Route path= "/item/:id" element ={<ItemPage/>} />
            </Routes>
        </>
    );
};