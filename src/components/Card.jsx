import { Link } from "react-router-dom";
import Logements from "../data/logements.json";

const Card = () => {
  return (
    <ul>
      {Logements &&
        Logements.map((logement) => (
          <li>
            <Link to={"/housing/" + logement.id}>
              <figure>
                <img src={logement.cover} alt="image1" />
                <figcaption>
                  <h2>{logement.title}</h2>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Card;
