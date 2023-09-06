import React from "react";
import "../sass/main.scss";
import homeBanner from "../assets/home_banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner src={homeBanner} alt="bannière accueil"></Banner>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
