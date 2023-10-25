import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logooooo" />
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
    </div>
  );
}

export default Navbar;
