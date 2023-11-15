import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/MakeADrink.scss";
import "../styles/MostPopular.scss";

function RandomCocktail() {
  const [randCocktail, setRandCocktail] = useState(null);

  const displayRandomCocktail = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v2/9973533/random.php")
      .then((res) => setRandCocktail(res.data.drinks[0]))
      .catch((err) => {
        console.info(err);
      });
  };
  useEffect(() => {
    displayRandomCocktail();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="random_button">
        <button
          className="submit"
          type="button"
          onClick={displayRandomCocktail}
        >
          Click me for random
        </button>
      </div>

      {randCocktail && (
        <div className="item random">
          <img src={randCocktail.strDrinkThumb} alt={randCocktail.strDrink} />
          <h2>{randCocktail.strDrink}</h2>
          <div className="ingredient">
            <p>{randCocktail.strIngredient1}</p>
            <p>{randCocktail.strIngredient2}</p>
            <p>{randCocktail.strIngredient3}</p>
            <p>{randCocktail.strIngredient4}</p>
            <p>{randCocktail.strIngredient5}</p>
            <p>{randCocktail.strIngredient6}</p>
            <p>{randCocktail.strIngredient7}</p>
            <p>{randCocktail.strIngredient8}</p>
            <p>{randCocktail.strIngredient9}</p>
            <p>{randCocktail.strIngredient10}</p>
            <p>{randCocktail.strIngredient11}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomCocktail;
