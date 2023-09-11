import PropTypes from "prop-types";

const Collapse = ({ collapseName, collapseText }) => {
  return (
    <div className="collapse">
      <button className="collapse-name">{collapseName}</button>
      <div className="collapse-text">{collapseText}</div>
    </div>
  );
};

Collapse.propTypes = {
  collapseName: PropTypes.string,
  collapseText: PropTypes.string,
};

export default Collapse;
