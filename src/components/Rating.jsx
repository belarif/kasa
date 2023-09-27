import PropTypes from "prop-types";

const Rating = ({ housing }) => {
  return (
    <div className="rate">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span
          key={`rate_${rate}`}
          style={
            parseInt(housing.rating, 10) >= rate ? { color: "#ff6060" } : {}
          }
        >
          &#128970;
        </span>
      ))}
    </div>
  );
};

Rating.prototype = {
  housing: PropTypes.object,
};

export default Rating;
