import React from "react";
import { HomeContainer } from "./Home.styled";
import HomeArticles from "../HomeArticles/HomeArticles";



export default function Home(){
    return (
        <HomeContainer>
            <hero>
                <h1>What is Items?</h1>
                <p> Whether you are looking for vintage clothing online,
                    <br/> a new favourite vintage shop, online furniture, homewares or textiles,
                    <br/>the Discover Vintage marketplace is the place to uncover
                    <br/> top quality items from the past,<br/> hand-picked by the finest traders in the business. 
                </p>
            </hero>
            <h2 style={{color: "white"}}>Check out our last offers</h2>
            <HomeArticles/>
        </HomeContainer>  
    );
};