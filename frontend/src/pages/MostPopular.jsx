import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/MostPopular.scss";
import LikeButton from "../components/Like";
import shareButton from "../assets/share.svg";
import arrow from "../assets/arrow.png";

function MostPopular() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1800: { items: 4 },
    2200: { items: 5 },
  };

  const API = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => {
      setCocktails(response.data.drinks);
    });
  }, []);

  const carousel = useRef(AliceCarousel);

  const items = cocktails.map((cocktail, index) => (
    <div className="item" data-value={index} key={cocktail.idDrink}>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="cardimg"
      />
      <h2>{cocktail.strDrink}</h2>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure1}&nbsp;</p>
        <p>{cocktail.strIngredient1}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure2}&nbsp;</p>
        <p>{cocktail.strIngredient2}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure3}&nbsp;</p>
        <p>{cocktail.strIngredient3}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure4}&nbsp;</p>
        <p>{cocktail.strIngredient4}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure5}&nbsp;</p>
        <p>{cocktail.strIngredient5}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure6}&nbsp;</p>
        <p>{cocktail.strIngredient6}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure7}&nbsp;</p>
        <p>{cocktail.strIngredient7}</p>
      </div>
      <div className="measure_ingredient">
        <p>{cocktail.strMeasure8}&nbsp;</p>
        <p>{cocktail.strIngredient8}</p>
      </div>
      <div className="likeAndShareContainer">
        <LikeButton className="likeIcon" />
        <img src={shareButton} alt="share" className="shareIcon" />
      </div>
    </div>
  ));

  return (
    <div>
      <div className="mostPopularCarousel">
        <h2>Here are the most popular cocktails!</h2>
        <AliceCarousel
          disableButtonsControls
          infinite
          mouseTracking
          items={items}
          responsive={responsive}
          ref={carousel}
          controlsStrategy="default"
          keyboardNavigation
        />
        <div key="btns" className="b-refs-buttons">
          <button
            onClick={(e) => carousel?.current?.slidePrev(e)}
            type="submit"
            className="leftButton"
          >
            <img className="arrow arrowLeft" src={arrow} alt="arrow_left" />
          </button>
          <button
            onClick={(e) => carousel?.current?.slideNext(e)}
            type="submit"
            className="rightButton"
          >
            <img className="arrow" src={arrow} alt="arrow_right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
