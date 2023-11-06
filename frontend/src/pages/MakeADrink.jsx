import Navbar from "./Navbar";

function MakeADrink() {
  return (
    <div>
      <Navbar />
      <h2>Voici $VARIABLE cocktails à faire avec vos ingrédients</h2>
      <div className="right-container" />
    </div>
  );
}

export default MakeADrink;
