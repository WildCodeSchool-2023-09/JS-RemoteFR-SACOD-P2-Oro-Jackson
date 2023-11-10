import "../styles/Navbar.scss";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>The Cocktail Maker</h1>
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
