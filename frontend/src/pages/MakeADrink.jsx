import Navbar from "./Navbar";
import MyCarousel from "../components/Carousel";

function MakeADrink() {
  return (
    <div>
      <Navbar />
      <h1>Voici VARIABLE cocktails à faire avec vos ingrédients</h1>
      <MyCarousel />
    </div>
  );
}

export default MakeADrink;
