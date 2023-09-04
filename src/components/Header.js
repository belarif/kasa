import logo from "../assets/logo.png";
import "../sass/main.scss";

function Header() {
  return (
    <nav className="header-navbar">
      <a href="#">
        <img src={logo} alt="logo Kasa" title="logo" />
      </a>
      <ul>
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#a_propos">A propos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
