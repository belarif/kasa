import React, { useState, useEffect } from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Housing = () => {
  const { housingId } = useParams();
  const [housing, setHousing] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("../data/housings.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const housing = data.find((housing) => housing.id === housingId);
        setHousing(housing);
      });
  }, [setHousing, housingId]);

  

  if (housing === null) {
    return <div></div>;
  }

  let collapseNames = ["Description", "Equipements"];
  let collapseTexts = [[housing.description], housing.equipments];

  return (
    <React.Fragment>
      <Header />
      <main className="main_housing">
        <div className="carrousel">
          <div className="slideshow-container">
            {housing.pictures.map((picture, pictureIndex) => (
              <div className="mySlides" key={`picture_${pictureIndex}`} style={pictureIndex === index ? {display: 'block'} : {}}>
                <div className="numbertext">
                  {index + 1} / {housing.pictures.length}
                </div>
                <img src={picture} alt={housing.title} />
              </div>
            ))}
            <button
              className="prev"
              onClick={() => {
                setIndex((index) =>
                  (index - 1) >= 0 ? index - 1 : housing.pictures.length - 1 
                );
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="next"
              onClick={() => {
                setIndex((index) => ( (index + 1) < housing.pictures.length ? index + 1 : 0));
              }}
            >
              <FaChevronRight />
            </button>
          </div>
          <br />
        </div>
        <div className="housing_details">
          <div className="title_host">
            <div className="title">
              <h1>{housing.title}</h1>
              <p>{housing.location}</p>
            </div>
            <div className="host">
              <p>{housing.host.name}</p>
              <img src={housing.host.picture} alt={housing.host.name} />
            </div>
          </div>
          <div className="tag_rate">
            <div className="tag">
              {housing.tags.map((tag, tagIndex) => (
                <button key={`tag_${tagIndex}`}>{tag}</button>
              ))}
            </div>
            <div className="rate">
              <FaStar
                style={{ width: "30px", height: "30px", color: "#ff6060" }}
              />
              <FaStar
                style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
              />
              <FaStar
                style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
              />
              <FaStar
                style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
              />
              <FaStar
                style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
              />
            </div>
          </div>
          <div className="details">
            {collapseNames.map((collapseName, collapseIndex) => (
              <div key={`collapse_${collapseIndex}`} className="name_text">
                <Collapse
                  collapseName={collapseName}
                  collapseText={collapseTexts[collapseIndex]}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Housing;
