import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

function showMenu() {
  const menuBurgerIcon = document.getElementsByClassName("menuBurger-icon");
  const menuBurger = document.getElementsByClassName("menuBurger");

  menuBurgerIcon[0].classList.toggle("menuBurger-icon-active");
  menuBurger[0].classList.toggle("menuBurger-active");
}

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link className="h1" to="/">
          <h1>The Cocktail Maker</h1>
        </Link>
        <ul className="navList">
          <Link className="navLabel" to="/">
            <li className="navSelect">Home</li>
          </Link>
          <Link className="navLabel" to="makeadrink">
            <li className="navSelect">Make a drink</li>
          </Link>
          <Link className="navLabel" to="mostpopular">
            <li className="navSelect" id="hide">
              Most popular
            </li>
          </Link>
          <Link className="navLabel" to="random">
            <li className="navSelect" id="hide">
              Random
            </li>
          </Link>
          <Link className="navLabel" to="contacts">
            <li className="navSelect">Contact</li>
          </Link>
        </ul>
        <div
          className="menuBurger-icon"
          onClick={showMenu}
          aria-hidden="true"
        />
      </nav>
      <ul className="menuBurger">
        <Link className="navLabel" to="/">
          <li className="navSelect">Home</li>
        </Link>
        <Link className="navLabel" to="makeadrink">
          <li className="navSelect">Make a drink</li>
        </Link>
        <Link className="navLabel" to="mostpopular">
          <li className="navSelect" id="hide">
            Most popular
          </li>
        </Link>
        <Link className="navLabel" to="random">
          <li className="navSelect" id="hide">
            Random
          </li>
        </Link>
        <Link className="navLabel" to="contacts">
          <li className="navSelect">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
