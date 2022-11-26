import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import {CatalogWrapper, FilterWrapper} from "./Catalog.styled"
import Image from "../../images/items.jpg";
// import Image from "https://image.freepik.com/free-photo/summer-holiday-background-beach-accessories-white-wood-copy-space-vacation-travel-items-concept_1205-1427.jpg";

const data = [
    {
      name: "Camera",
      description: "A shiny dress, a shiny dress, a shiny dress",
      image: Image,
      price: 715,
      country: "US",
      provider: "LG"
    },
    {
      name: "Red dress",
      description:"A shiny dress in the style of Lady Gaga, for bright events",
      image: Image,
      price: 1540,
      country: "US",
      provider: "LG"
    },
    {
      name: "Shiny spoon",
      description:
        "A shiny dress, a shiny dress, a shiny dress, here is a good weather.",
      image: Image,
      price: 312,
      country: "China",
      provider: "KingSt."
    },
    {
      name: "Alme",
      description:
        "A shiny dress, a shiny dress, a shiny dress, here is a good weather.",
      image: Image,
      price: 235,
      country: "Ukraine",
      provider: "SantaMaria"
    },
  ];

export default function Catalog(){
    return (<>
      <FilterWrapper>
        <div className="filters">
          <select name="country" class="filter">
            <option value="item1">Filter1</option>
            <option value="item1">Item1</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
            <option value="item4">Item4</option>
          </select>
          <select name="provider" class="filter">
            <option value="item1">Filter2</option>
            <option value="item1">Item1</option>
            <option value="itme2">Item2</option>
            <option value="item3">Item3</option>
            <option value="item4">Item4</option>
          </select>
          <select name="country" class="filter">
            <option value="item1">Filter3</option>
            <option value="item1">Item1</option>
            <option value="itme2">Item2</option>
            <option value="item3">Item3</option>
            <option value="item4">Item4</option>
          </select>
          <input className="search_by_name"  placeholder="Search by name" type="text" />
        </div>
        <button>Apply</button>
      </FilterWrapper>
      <CatalogWrapper>
          {data.map(({ name, description, image, price}, idx) => (
            <CardItem
              name={name}
              description={description}
              image={image}
              price={price}
              id={idx}      
            />
        ))}
    </CatalogWrapper>
    </>
    );
};