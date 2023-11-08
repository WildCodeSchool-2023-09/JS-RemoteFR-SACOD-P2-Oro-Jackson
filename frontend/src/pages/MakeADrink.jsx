import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import axios from "axios";
import Navbar from "./Navbar";

function MakeADrink() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const API = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=";
  const [cocktails, setCocktails] = useState([]);
  const [alcohol, setAlcohol] = useState({
    Vodka: false,
    Gin: false,
    Rum: false,
    Tequila: false,
    Scotch: false,
  });

  const alcoholChecked = Object.keys(alcohol)
    .filter((e) => alcohol[e] === true)
    .map((element) => element.toUpperCase());

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(API).then((response) => {
      setCocktails(response.data.drinks);
    });
  }

  function handleClick(e) {
    const { name, checked } = e.target;
    setAlcohol({ ...alcohol, [name]: checked });
  }
  const items = cocktails
    .filter(
      (filter) =>
        filter.strIngredient1.toUpperCase().includes(alcoholChecked[0]) ||
        filter.strIngredient1.toUpperCase().includes(alcoholChecked[1]) ||
        filter.strIngredient1.toUpperCase().includes(alcoholChecked[2]) ||
        filter.strIngredient1.toUpperCase().includes(alcoholChecked[3]) ||
        filter.strIngredient1.toUpperCase().includes(alcoholChecked[4]) ||
        filter.strIngredient2.toUpperCase().includes(alcoholChecked[0]) ||
        filter.strIngredient2.toUpperCase().includes(alcoholChecked[2]) ||
        filter.strIngredient2.toUpperCase().includes(alcoholChecked[2]) ||
        filter.strIngredient2.toUpperCase().includes(alcoholChecked[3]) ||
        filter.strIngredient2.toUpperCase().includes(alcoholChecked[4])
    )

    .map((item, index) => {
      return (
        <div className="item" data-value={index} key={item.idDrink}>
          <img src={item.strDrinkThumb} alt={item.strDrink} />
          <h2>{item.strDrink}</h2>
        </div>
      );
    });

  return (
    <div>
      <Navbar />
      <h2>Voici $VARIABLE cocktails à faire avec vos ingrédients</h2>
      <div className="right-container" />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="checkbox"
            name="vodka"
            id="vodka"
            onChange={handleClick}
          />
          <label htmlFor="vodka">Vodka</label>
        </div>
        <div>
          <input type="checkbox" name="gin" id="gin" onChange={handleClick} />
          <label htmlFor="gin">Gin</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="tequila"
            id="tequila"
            onChange={handleClick}
          />
          <label htmlFor="tequila">Tequila</label>
        </div>
        <div>
          <input type="checkbox" name="rum" id="rum" onChange={handleClick} />
          <label htmlFor="rum">Rum</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="scotch"
            id="scotch"
            onChange={handleClick}
          />
          <label htmlFor="scotch">Scotch</label>
        </div>
        <div>
          <input type="submit" name="submit" value="Submit" />
        </div>
      </form>

      <div>
        <AliceCarousel
          disableDotsControls
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

export default MakeADrink;
