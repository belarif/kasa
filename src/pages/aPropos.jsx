import React from "react";
import "../sass/main.scss";
import aporposBanner from "../assets/a_propos_banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Apropos = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner src={aporposBanner} alt="bannière à propos"></Banner>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Apropos;
