import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ housings }) => {
  return (
    <ul className="card_list">
      {housings &&
        housings.map((housing) => (
          <li key={housing.id}>
            <Link to={"/housing/" + housing.id}>
              <figure>
                <img src={housing.cover} alt={housing.title} />
                <figcaption>
                  <h2>{housing.title}</h2>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
    </ul>
  );
};

Card.prototype = {
  housings: PropTypes.array,
};

export default Card;
