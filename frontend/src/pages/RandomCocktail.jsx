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
          <img
            src={randCocktail.strDrinkThumb}
            alt={randCocktail.strDrink}
            className="cardimg"
          />
          <h2>{randCocktail.strDrink}</h2>
          <div className="ingredient">
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure1}&nbsp;</p>
              <p>{randCocktail.strIngredient1}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure2}&nbsp;</p>
              <p>{randCocktail.strIngredient2}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure3}&nbsp;</p>
              <p>{randCocktail.strIngredient3}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure4}&nbsp;</p>
              <p>{randCocktail.strIngredient4}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure5}&nbsp;</p>
              <p>{randCocktail.strIngredient5}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure6}&nbsp;</p>
              <p>{randCocktail.strIngredient6}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure7}&nbsp;</p>
              <p>{randCocktail.strIngredient7}</p>
            </div>
            <div className="measure_ingredient">
              <p>{randCocktail.strMeasure8}&nbsp;</p>
              <p>{randCocktail.strIngredient8}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomCocktail;
