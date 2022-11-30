import React from "react";
import {HomeContainer} from "./Home.styled";
import Card from "../../components/Card/Card";
import ViewButton from "../../components/ViewButton/ViewButton";
import ImageArticle from "../../images/article.jpg";
// import CardItem from "../../components/CardItem/CardItem";

const props = {
    image: ImageArticle,
    title:'New',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus tincidunt libero, eget suscipit risus commodo id. Aliquam porta mauris metus, vitae faucibus mi luctus in...'
};
const props1 = {
    image: ImageArticle,
    name: 'Camera',
    description: 'Donec auctor interdum facilisis. Aliquam suscipit velit et purus imperdiet vestibulum. Nullam sodales ante magna, ac auctor nulla vehicula nec.',
    price : 120,
    country: "China",
    provider: "LG"
};


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
            <div className= "home-cards">
                <Card {...props} />
                <Card {...props} />
                <Card {...props} />
            </div>
            <ViewButton>View more</ViewButton>
        </HomeContainer>  
    );
};