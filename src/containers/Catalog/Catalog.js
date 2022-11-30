import React, { useState, useRef, useContext } from "react";
import CardItem from "../../components/CardItem/CardItem";
import {CatalogWrapper, FilterWrapper} from "./Catalog.styled"
import "../../components/ViewButton/View.css";
import { ItemsContext } from "../ItemsContext/ItemContext";




export default function Catalog(){
  let { items } = useContext(ItemsContext);
  const [itemsList, changeItemsList] = useState([...items.sort((a,b)=>a.name.localeCompare(b.name))]);
  const [findInput,setFindInput ] = useState("");
  const refContainer = useRef("");
  console.log(itemsList+"This is ItemsList");

  function clearInput (){
    setFindInput("")
    changeItemsList(items)
  }

  return (<>
      <FilterWrapper>
        <div className="filters">

          <select name="Name" class="filter" onChange={e=>{
                if (e.target.value === "NameASC"){
                  console.log("ASC");
                  let list = itemsList.sort((a,b)=>a.name.localeCompare(b.name));
                  return changeItemsList([...list]);
                }
                if (e.target.value === "NameDESC"){
                  console.log("DESC");
                  let list = itemsList.sort((a,b)=>b.name.localeCompare(a.name));
                  return changeItemsList([...list]);
                }
              }
            }>
            <option value="NameASC">Sort by Name: ASC</option>
            <option value="NameDESC">Sort by Name: DESC</option>
          </select>
          
          <select name="Price" class="filter" onChange={ e => {
            if (e.target.value === "all"){
              return changeItemsList([...items]);
            }
            if (e.target.value === "cheap"){
              let list = items.filter((card)=>card.price < 500);
              return changeItemsList([...list]);
            }
            if (e.target.value === "medium"){
              let list = items.filter((card)=> ((card.price>= 500) && (card.price< 1000)));
              return changeItemsList([...list]);
            }
            if (e.target.value === "expensive"){
              let list = items.filter((card)=>card.price >= 1000);
              return changeItemsList([...list]);
            }
          }}> 
            <option value="all">All Prices</option>
            <option value="cheap">Cheap</option>
            <option value="medium">Medium</option>
            <option value="expensive">Expensive</option>
          </select>

          <select name="Countries" class="filter" onChange={ e => {
            if (e.target.value === "all"){
              return changeItemsList([...items]);
            }
            if (e.target.value === "US"){
              let list = items.filter((item)=> item.country === "US");
              return changeItemsList([...list]);
            }
            if (e.target.value === "UK"){
              let list = items.filter((item)=> item.country === "UK");
              return changeItemsList([...list]);
            }
            if (e.target.value === "China"){
              let list = items.filter((item)=> item.country === "China" );
              return changeItemsList([...list]);
            }
          }}>
            <option value="all">Countries</option>
            <option value="US">US</option>
            <option value="UK">United Kingdom</option>
            <option value="China">China</option>
          </select>

          <input ref={refContainer} className="search_by_name" placeholder="Search by name" value={findInput} type="text" onChange={()=>setFindInput()} />
          <button onClick={clearInput}>Clear</button>
        </div>
        <button onClick={() =>changeItemsList([...itemsList.filter((card)=> card.name.includes(refContainer.current.value))])}>Apply</button>
      </FilterWrapper>
      <CatalogWrapper>
          {itemsList.map(({ name, description, image, price,country,provider,id}) => (
            <CardItem
              name={name}
              description={description}
              image={image}
              country={country}
              provider={provider}
              price={price}
              id={id}      
            />
        ))}
    </CatalogWrapper>
    </>
  );
};