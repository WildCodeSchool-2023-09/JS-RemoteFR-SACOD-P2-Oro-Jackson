import videoBackground from "../assets/V.mp4";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/makeadrink">Make a drink</a>
          </li>
          <li>
            <a href="/contacts">Contact</a>
          </li>
        </ul>
      </nav>
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
          surprendre... 🤫
        </p>
      </div>
    </div>
  );
}

export default Home;
