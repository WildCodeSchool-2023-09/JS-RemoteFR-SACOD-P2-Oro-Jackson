import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animationEdit.json";

function Loader() {
  return (
    <Player
      autoplay
      loop
      src={animation}
      style={{ height: "500px", width: "500px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
}

export default Loader;
