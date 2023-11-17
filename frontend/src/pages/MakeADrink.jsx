import { useEffect, useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import axios from "axios";
import "../styles/MakeADrink.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Stack,
  Chip,
} from "@mui/material";
import Navbar from "./Navbar";
import Loader from "../components/Loader";
import LikeButton from "../components/Like";
import shareButton from "../assets/share.svg";
import arrow from "../assets/arrow.png";

const names = ["Vodka", "Gin", "Rum", "Tequila", "Scotch"];

function MakeADrink() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1800: { items: 4 },
    2200: { items: 5 },
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(API).then((response) => {
      setCocktails(response.data.drinks);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    });
  }, []);

  const carousel = useRef(AliceCarousel);

  const [selectedNames, setSelectedNames] = useState([]);

  const alcoholChecked = Object.keys(alcohol)
    .filter((element) => alcohol[element] === true)
    .map((element) => element.toUpperCase());

  function handleSelect(e) {
    const newSelectedNames = e.target.value;
    setSelectedNames(newSelectedNames);

    const newAlcoholState = {};
    Object.keys(alcohol).forEach((name) => {
      newAlcoholState[name] = newSelectedNames.includes(name);
    });
    setAlcohol(newAlcoholState);
  }

  function handleDelete(value) {
    setSelectedNames(selectedNames.filter((item) => item !== value));
    const newAlcoholState = { ...alcohol, [value]: false };
    setAlcohol(newAlcoholState);
  }

  const items =
    selectedNames.length === 0
      ? cocktails.map((item, index) => {
          return (
            <div className="item" data-value={index} key={item.idDrink}>
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                className="cardimg"
              />
              <h2>{item.strDrink}</h2>
              <div className="measure_ingredient">
                <p>{item.strMeasure1}&nbsp;</p>
                <p>{item.strIngredient1}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure2}&nbsp;</p>
                <p>{item.strIngredient2}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure3}&nbsp;</p>
                <p>{item.strIngredient3}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure4}&nbsp;</p>
                <p>{item.strIngredient4}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure5}&nbsp;</p>
                <p>{item.strIngredient5}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure6}&nbsp;</p>
                <p>{item.strIngredient6}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure7}&nbsp;</p>
                <p>{item.strIngredient7}</p>
              </div>
              <div className="measure_ingredient">
                <p>{item.strMeasure8}&nbsp;</p>
                <p>{item.strIngredient8}</p>
              </div>
              <div className="likeAndShareContainer">
                <LikeButton className="likeIcon" />
                <img src={shareButton} alt="share" className="shareIcon" />
              </div>
            </div>
          );
        })
      : cocktails
          .filter(
            (filter) =>
              filter.strIngredient1.toUpperCase().includes(alcoholChecked[0]) ||
              filter.strIngredient1.toUpperCase().includes(alcoholChecked[1]) ||
              filter.strIngredient1.toUpperCase().includes(alcoholChecked[2]) ||
              filter.strIngredient1.toUpperCase().includes(alcoholChecked[3]) ||
              filter.strIngredient1.toUpperCase().includes(alcoholChecked[4]) ||
              filter.strIngredient2.toUpperCase().includes(alcoholChecked[0]) ||
              filter.strIngredient2.toUpperCase().includes(alcoholChecked[1]) ||
              filter.strIngredient2.toUpperCase().includes(alcoholChecked[2]) ||
              filter.strIngredient2.toUpperCase().includes(alcoholChecked[3]) ||
              filter.strIngredient2.toUpperCase().includes(alcoholChecked[4])
          )

          .map((item, index) => {
            return (
              <div className="item" data-value={index} key={item.idDrink}>
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="cardimg"
                />
                <h2>{item.strDrink}</h2>
                <div className="measure_ingredient">
                  <p>{item.strMeasure1}&nbsp;</p>
                  <p>{item.strIngredient1}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure2}&nbsp;</p>
                  <p>{item.strIngredient2}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure3}&nbsp;</p>
                  <p>{item.strIngredient3}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure4}&nbsp;</p>
                  <p>{item.strIngredient4}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure5}&nbsp;</p>
                  <p>{item.strIngredient5}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure6}&nbsp;</p>
                  <p>{item.strIngredient6}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure7}&nbsp;</p>
                  <p>{item.strIngredient7}</p>
                </div>
                <div className="measure_ingredient">
                  <p>{item.strMeasure8}&nbsp;</p>
                  <p>{item.strIngredient8}</p>
                </div>
                <div className="likeAndShareContainer">
                  <LikeButton className="likeIcon" />
                  <img src={shareButton} alt="share" className="shareIcon" />
                </div>
              </div>
            );
          });

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader className="loaderMAD" />
      ) : (
        <div>
          <h2 className="cocktailLengh">
            You can make {items.length}{" "}
            {items.length > 1 ? "cocktails" : "cocktail"} with these ingredients
          </h2>
          <div className="container">
            <div className="left-container">
              <FormControl
                className="select"
                sx={{
                  m: 1,
                  width: 475,
                  color: "white",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    "&:hover": {
                      color: "white",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                  },
                  backgroundColor: "#111111",
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <InputLabel
                  sx={{
                    color: "white",
                  }}
                >
                  Select alcohols
                </InputLabel>
                <Select
                  multiple
                  sx={{
                    color: "white",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  }}
                  renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                      {selected.map((value) => (
                        <Chip
                          sx={{
                            color: "white",
                            "& .MuiChip-deleteIcon": {
                              color: "#f9f9f9;",
                              "&:hover": {
                                color: "#f9f9f9c5",
                              },
                            },
                          }}
                          key={value}
                          label={value}
                          onDelete={() => handleDelete(value)}
                          deleteIcon={
                            <CancelIcon
                              onMouseDown={(event) => event.stopPropagation()}
                            />
                          }
                        />
                      ))}
                    </Stack>
                  )}
                  value={selectedNames}
                  onChange={(e) => handleSelect(e)}
                  input={<OutlinedInput label="Multiple Select" />}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="right-container">
              <AliceCarousel
                disableDotsControls
                disableButtonsControls
                infinite
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="default"
                keyboardNavigation
                ref={carousel}
              />
              <div key="btns" className="b-refs-buttons">
                <button
                  onClick={(e) => carousel?.current?.slidePrev(e)}
                  type="submit"
                  className="leftButton"
                >
                  <img
                    className="arrow arrowLeft"
                    src={arrow}
                    alt="arrow_left"
                  />
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
        </div>
      )}
    </>
  );
}

export default MakeADrink;
