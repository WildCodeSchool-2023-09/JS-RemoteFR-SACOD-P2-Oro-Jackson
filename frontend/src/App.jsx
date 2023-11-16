import { Link } from "react-router-dom";
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
          <h2>🍹 Don't know what to drink?</h2>
          <p>
            Do you have any rum left ? Or are you simply a fan of good cocktails
            ? 🍸
            <br />
            Then, The Cocktail Maker is made for you !
            <br />
            Choose from your favorite alcohols and let yourself be surprised...
            🤫
          </p>
          <form className="home_button">
            <Link to="/makeadrink">
              <input className="submit" type="button" value="Try It !" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
