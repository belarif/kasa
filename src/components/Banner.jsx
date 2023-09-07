import PropTypes from "prop-types";

const Banner = ({ src, alt, title }) => {
  return (
    <header className="banner">
      {title ? <h1>{title}</h1> : ""}
      <img src={src} alt={alt} />
    </header>
  );
};

Banner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default Banner;
