import React, { useState } from 'react';
import { HomeArticlesStyled } from './HomeArticles.styled';
import Card from "../../components/Card/Card";
import ViewButton from "../../components/ViewButton/ViewButton";
import ImageArticle1 from "../../images/article.jpg";
import ImageArticle2 from "../../images/sause.jpg";
import ImageArticle3 from "../../images/croissants.jpg";
import ImageArticle4 from "../../images/keychains.jpg";
import ImageArticle5 from "../../images/coolmantools.jpg";

const titles = ['THE NEW CAMERA','ChessBoard','Ketchup','IceTea',
'Onhio','Piano is HERE','Trousers','Jacket','Hats in SALE','Coffee','Hats','Sunglasses'];
const descriptions =['Proin eget tellus scelerisque, fermentum est sed, aliquam nisl..','Donec gravida nisl vel tellus congue consectetur..', 'Phasellus vel augue dapibus, dapibus velit quis, mollis nunc..','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus tincidunt libero, eget suscipit risus..',
'In ornare ornare sem eu sollicitudin. Etiam gravida bibendum euismod. Nulla elit lorem, efficitur sit amet efficitur laoreet, imperdiet sed ipsum...',
'Vestibulum et mollis elit, ac varius lorem. Nunc nec sem dapibus, dignissim enim vel, rutrum risus. Integer ac rhoncus mi...','In ut nisi sit amet felis lacinia gravida in nec odio. Duis eu blandit neque. Ut suscipit quam non condimentum posuere...'];
const images = [ImageArticle1,ImageArticle2,ImageArticle3,ImageArticle4,ImageArticle5];

const getRandomValue = (array) =>{
    return array[Math.floor(Math.random()*array.length)];
}

const addArticles = (...array) => {
    for (let i = 0; i < 3; i++) {
        console.log(array);
        array.push({"image": getRandomValue(images), "title": getRandomValue(titles), "description": getRandomValue(descriptions)})
    }
    return array
}


export default function HomeArticles(){
    const [articles, updateArticles] = useState(addArticles());
    return(
    <HomeArticlesStyled>
        <div className= "home-cards">
            {articles.map(({ title, description, image}) => (
                <Card title={title}
                description={description}
                image={image}
                />))}
        </div>
        <ViewButton onClick={() => updateArticles(addArticles(...articles))}>View more</ViewButton>
    </HomeArticlesStyled>)
}