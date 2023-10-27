import { useState } from "react";
import axios from "axios";

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
  return (
    <div>
      <button type="button" onClick={displayRandomCocktail}>
        Click me for random
      </button>

      {randCocktail && (
        <div>
          <h2>{randCocktail.strDrink}</h2>
          <img src={randCocktail.strDrinkThumb} alt={randCocktail.strDrink} />
          <p>{randCocktail.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default RandomCocktail;
