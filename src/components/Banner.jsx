const Banner = ({ src, alt, title }) => {
  return (
    <div className="banner">
      {title ? <h1>{title}</h1> : ""}
      <img src={src} alt={alt} />
    </div>
  );
};

export default Banner;
