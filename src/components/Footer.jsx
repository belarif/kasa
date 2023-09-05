import logo from "../assets/logo-blanc.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo Kasa" title="logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
