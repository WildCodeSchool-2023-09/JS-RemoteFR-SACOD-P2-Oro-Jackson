import Navbar from "./pages/Navbar";
import videoBackground from "./assets/V.mp4";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home-container">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src={videoBackground} type="video/mp4" />
          </video>
        </div>
        <div className="card">
          <h2>🍹The Cocktail Maker</h2>
          <p>
            Il vous reste un fond de Rhum ? Ou vous êtes tout simplement amateur
            de bons cocktails ? Alors The Cocktail Maker est fait pour vous ! 🍸
            Choisissez parmi vos alcools et ingrédients favoris et laissez-vous
            surprendre...
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
