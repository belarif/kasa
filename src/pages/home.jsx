import React, { useState, useEffect } from "react";
import "../sass/main.scss";
import Modal from "../components/Modal";
import homeBanner from "../assets/home_banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  const [housings, setHousings] = useState(null);

  useEffect(() => {
    fetch("data/housings.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHousings(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Modal />
      <Header />
      <Banner
        src={homeBanner}
        alt="bannière accueil"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <main className="main-home">
        <Card housings={housings} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
