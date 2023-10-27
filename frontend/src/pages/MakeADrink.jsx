import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import MyCarousel from "../components/Carousel";

function MakeADrink() {
  const API = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php";
  const [cocktail, setCocktail] = useState();

  const getCocktail = () => {
    axios.get(API).then((response) => {
      setCocktail(response.data.drinks[0]);
    });
  };
  return (
    <div>
      <Navbar />
      <h1>Voici $VARIABLE cocktails à faire avec vos ingrédients</h1>
      <div>
        <button type="button" onClick={getCocktail}>
          TEST
        </button>
        <h2>{cocktail.strDrink}</h2>
      </div>
      <MyCarousel />
    </div>
  );
}

export default MakeADrink;
