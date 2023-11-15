import { useRouteError } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animation404 from "./assets/404animation.json";
import "./styles/Error.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="errorPage">
      <div id="error-page" className="textError">
        <h1>Oops! Cocktail not found!</h1>
        <p>You shaked the wrong cocktail</p>
        <p className="tdm">☠️</p>
      </div>
      <Player
        autoplay
        loop
        src={animation404}
        style={{ height: "500px", width: "500px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}
