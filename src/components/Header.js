import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <nav>
      <img src={logo} alt="Kasa" title="" />
      <ul>
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#a-propos">A propos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
