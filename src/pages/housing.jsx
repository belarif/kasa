import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeBanner from "../assets/home_banner.png";
import Logo from "../assets/home_banner.png";
import { FaRegStar } from "react-icons/fa";
import Collapse from "../components/Collapse";

const Housing = () => {
  let collapseNames = ["Description", "Equipements"];
  let collapseTexts = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  ];
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
              <h1>Cosy loft on the canal</h1>
              <p>Paris, ile-de-fraance</p>
            </div>
            <div className="host">
              <p>Alexandre Dumas</p>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="tag_rate">
            <div className="tag">
              <button>Cosy</button>
              <button>Canal</button>
              <button>Paris 10 test test test test test</button>
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
              <div className="name_text">
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
