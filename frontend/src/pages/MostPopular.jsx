import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./MostPopular.scss";

function MostPopular() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const API = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => {
      setCocktails(response.data.drinks);
    });
  }, []);

  const items = cocktails.map((cocktail, index) => (
    <div className="item" data-value={index} key={cocktail.idDrink}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h2>{cocktail.strDrink}</h2>
      <p>{cocktail.strIngredient1}</p>
      <p>{cocktail.strIngredient2}</p>
      <p>{cocktail.strIngredient3}</p>
      <p>{cocktail.strIngredient4}</p>
      <p>{cocktail.strIngredient5}</p>
      <p>{cocktail.strIngredient6}</p>
      <p>{cocktail.strIngredient7}</p>
      <p>{cocktail.strIngredient8}</p>
      <p>{cocktail.strIngredient9}</p>
      <p>{cocktail.strIngredient10}</p>
      <p>{cocktail.strIngredient11}</p>
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div>
        <AliceCarousel
          infinite
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
}

export default MostPopular;
