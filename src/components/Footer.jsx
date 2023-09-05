import logo from "../assets/logo-blanc.png";

const Footer = () => {
  return (
    <footer>
      <a href="/">
        <img src={logo} alt="logo Kasa" title="logo" />
      </a>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
