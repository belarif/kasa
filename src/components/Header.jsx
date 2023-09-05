import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-navbar">
      <Link to="/">
        <img src={logo} alt="logo Kasa" title="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/aPropos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
