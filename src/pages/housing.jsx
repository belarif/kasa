import React, { useState, useEffect } from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
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
        <Carrousel housing={housing} />
        <div className="housing_details">
          <div className="title_tag">
            <div className="title">
              <h1>{housing.title}</h1>
              <p>{housing.location}</p>
            </div>
            <div className="tag">
              {housing.tags.map((tag, tagIndex) => (
                <button key={`tag_${tagIndex}`}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="host_rate">
            <div className="host">
              <p>{housing.host.name}</p>
              <img src={housing.host.picture} alt={housing.host.name} />
            </div>
            <div className="rate">
                {[1,2,3,4,5].map((rate) => <span key={`rate_${rate}`} style={parseInt(housing.rating, 10) >= rate ? {color: 'red'} : {}}>&#128970;</span>)}
            </div>
          </div>
        </div>
        <div className="collapses">
          {collapseNames.map((collapseName, collapseIndex) => (
            <div key={`collapse_${collapseIndex}`} className="collapse_housing">
              <Collapse
                collapseName={collapseName}
                collapseText={collapseTexts[collapseIndex]}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Housing;
