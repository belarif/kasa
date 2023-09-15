import React, { useState, useEffect } from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeBanner from "../assets/home_banner.png";
import Collapse from "../components/Collapse";
import { FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Housing = () => {
  const { housingId } = useParams();
  const [housing, setHousing] = useState(null);

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
          <img src={homeBanner} alt="carrousel" />
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
              {housing.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
            <div className="rate">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <div className="details">
            {collapseNames.map((collapseName, index) => (
              <div key={index} className="name_text">
                <Collapse
                  collapseName={collapseName}
                  collapseText={collapseTexts[index]}
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
