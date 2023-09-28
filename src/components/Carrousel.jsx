import React, { useState } from "react";
import PropTypes from "prop-types";

const Carrousel = ({ housing }) => {
  let [index, setIndex] = useState(0);

  return (
    <div className="carrousel">
      <div className="slideshow-container">
        {housing.pictures.map((picture, pictureIndex) => (
          <div
            className="mySlides"
            key={`picture_${pictureIndex}`}
            style={pictureIndex === index ? { display: "block" } : {}}
          >
            <div
              className="numbertext"
              style={housing.pictures.length === 1 ? { display: "none" } : {}}
            >
              {index + 1} / {housing.pictures.length}
            </div>
            <img src={picture} alt={housing.title} />
          </div>
        ))}

        <button
          style={housing.pictures.length === 1 ? { display: "none" } : {}}
          className="prev"
          onClick={() => {
            setIndex((index) =>
              index > 0 ? (index -= 1) : housing.pictures.length - 1
            );
          }}
        >
          <span>&#10094;</span>
        </button>
        <button
          style={housing.pictures.length === 1 ? { display: "none" } : {}}
          className="next"
          onClick={() => {
            setIndex((index) =>
              index < housing.pictures.length - 1 ? (index += 1) : 0
            );
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

Carrousel.propTypes = {
  housing: PropTypes.object,
};

export default Carrousel;
