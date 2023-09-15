import React, { useState, useEffect } from "react";
import "../sass/main.scss";
import aporposBanner from "../assets/a_propos_banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const Apropos = () => {
  const [aproposData, setAproposData] = useState([]);

  useEffect(() => {
    fetch("../data/aPropos.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAproposData(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Banner src={aporposBanner} alt="bannière à propos"></Banner>
      <main className="main_aPropos">
        {aproposData.map((aPropos, index) => (
          <Collapse
            key={index}
            collapseName={aPropos.collapseName}
            collapseText={aPropos.collapseText}
          />
        ))}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Apropos;
