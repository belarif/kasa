import React from "react";
import "../sass/main.scss";
import homeBanner from "../assets/home_banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner
        src={homeBanner}
        alt="bannière accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <main className="main-home">
        <Card />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
