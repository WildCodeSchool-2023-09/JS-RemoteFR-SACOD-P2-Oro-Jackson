import "../styles/Navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logooooo" />
        <ul className="navList">
          <li className="navSelect">
            <a className="navLabel" href="/">
              Home
            </a>
          </li>
          <li className="navSelect">
            <a className="navLabel" href="/makeadrink">
              Make a drink
            </a>
          </li>
          <li className="navSelect" id="hide">
            <a className="navLabel" href="/mostpopular">
              Most popular
            </a>
          </li>
          <li className="navSelect" id="hide">
            <a className="navLabel" href="/random">
              Random
            </a>
          </li>
          <li className="navSelect">
            <a className="navLabel" href="/contacts">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
