import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
