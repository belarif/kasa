import React from "react";
import "../sass/main.scss";
import aporposBanner from "../assets/a_propos_banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const Apropos = () => {
  let collapseNames = ["Fiabilité", "Respect", "Service", "Securité"];
  let collapseTexts = [
    [
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    ],
    [
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    ],
    [
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question",
    ],
    [
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ],
  ];

  return (
    <React.Fragment>
      <Header />
      <Banner src={aporposBanner} alt="bannière à propos"></Banner>
      <main className="main_aPropos">
        {collapseNames.map((collapseName, index) => (
          <Collapse
            collapseName={collapseName}
            collapseText={collapseTexts[index]}
          />
        ))}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Apropos;
