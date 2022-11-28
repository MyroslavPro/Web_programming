import { createContext } from 'react';
import Image from "../../images/items.jpg";

export const items = [
    {
      id: 1,
      name: "Camera",
      description: "A shiny dress, a shiny dress, a shiny dress",
      image: Image,
      price: 715,
      country: "US",
      provider: "LG"
    },
    {
      id: 2,
      name: "Red dress",
      description:"A shiny dress in the style of Lady Gaga, for bright events",
      image: Image,
      price: 1540,
      country: "US",
      provider: "LG"
    },
    {
      id: 3,
      name: "Weird spoon",
      description:
        "A shiny dress, a shiny dress, a shiny dress, here is a good weather.",
      image: Image,
      price: 312,
      country: "China",
      provider: "KingSt."
    },
    {
      id: 4,
      name: "Alme",
      description: "A shiny dress, a shiny dress, a shiny dress, here is a good weather.",
      image: Image,
      price: 235,
      country: "Ukraine",
      provider: "SantaMaria"
    }
  ];

export const ItemsContext = createContext();