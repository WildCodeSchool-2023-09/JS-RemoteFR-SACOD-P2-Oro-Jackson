import videoBackground from "../assets/V.mp4";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <p>Home</p>
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
    </div>
  );
}

export default Home;
