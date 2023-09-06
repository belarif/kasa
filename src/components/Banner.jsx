const Banner = ({ src, alt, title }) => {
  return (
    <header className="banner">
      {title ? <h1>{title}</h1> : ""}
      <img src={src} alt={alt} />
    </header>
  );
};

export default Banner;
