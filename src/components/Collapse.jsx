import { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ collapseName, collapseText }) => {
  let [open, setOpen] = useState(false);

  return open ? (
    <div className="collapse" style={{ marginBottom: "15px" }}>
      <button className="collapse_name" onClick={() => setOpen(false)}>
        {collapseName}
        <span className="up-arrow">&#8964;</span>
      </button>
      <ul className="collapse_text" style={{ display: "block" }}>
        {collapseText.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="collapse">
      <button className="collapse_name" onClick={() => setOpen(true)}>
        {collapseName}
        <span className="down-arrow">&#8963;</span>
      </button>
      <ul className="collapse_text" style={{ display: "none" }}>
        {collapseText.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

Collapse.propTypes = {
  collapseName: PropTypes.string,
  collapseText: PropTypes.array,
};

export default Collapse;
