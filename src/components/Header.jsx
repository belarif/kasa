import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="header-navbar">
      <a href="/">
        <img src={logo} alt="logo Kasa" title="logo" />
      </a>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="a-propos">A propos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
