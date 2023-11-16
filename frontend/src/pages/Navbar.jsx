import "../styles/Navbar.scss";

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
        <a className="h1" href="/">
          <h1>The Cocktail Maker</h1>
        </a>
        <ul className="navList">
          <a className="navLabel" href="/">
            <li className="navSelect">Home</li>
          </a>
          <a className="navLabel" href="/makeadrink">
            <li className="navSelect">Make a drink</li>
          </a>
          <a className="navLabel" href="/mostpopular">
            <li className="navSelect" id="hide">
              Most popular
            </li>
          </a>
          <a className="navLabel" href="/random">
            <li className="navSelect" id="hide">
              Random
            </li>
          </a>
          <a className="navLabel" href="/contacts">
            <li className="navSelect">Contact</li>
          </a>
        </ul>
        <div
          className="menuBurger-icon"
          onClick={showMenu}
          aria-hidden="true"
        />
      </nav>
      <ul className="menuBurger">
        <a className="navLabel" href="/">
          <li className="navSelect">Home</li>
        </a>
        <a className="navLabel" href="/makeadrink">
          <li className="navSelect">Make a drink</li>
        </a>
        <a className="navLabel" href="/mostpopular">
          <li className="navSelect" id="hide">
            Most popular
          </li>
        </a>
        <a className="navLabel" href="/random">
          <li className="navSelect" id="hide">
            Random
          </li>
        </a>
        <a className="navLabel" href="/contacts">
          <li className="navSelect">Contact</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
