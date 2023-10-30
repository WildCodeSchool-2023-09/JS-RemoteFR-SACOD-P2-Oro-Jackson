import Navbar from "./Navbar";
import MyCarousel from "../components/Carousel";

function MakeADrink() {
  return (
    <div>
      <Navbar />
      <h2>Voici $VARIABLE cocktails à faire avec vos ingrédients</h2>
      <div className="right-container">
        <MyCarousel />
      </div>
    </div>
  );
}

export default MakeADrink;
