import { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Collapse = ({ collapseName, collapseText }) => {
  let [open, setOpen] = useState(false);

  return open ? (
    <div className="collapse">
      <button className="collapse_name" onClick={() => setOpen(false)}>
        {collapseName}
        <span className="fa-angle-down">
          <FaAngleUp />
        </span>
      </button>
      <div className="collapse_text" style={{ display: "block" }}>
        {collapseText}
      </div>
    </div>
  ) : (
    <div className="collapse">
      <button className="collapse_name" onClick={() => setOpen(true)}>
        {collapseName}
        <span className="fa-angle-down">
          <FaAngleDown />
        </span>
      </button>
      <div className="collapse_text" style={{ display: "none" }}>
        {collapseText}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  collapseName: PropTypes.string,
  collapseText: PropTypes.string,
};

export default Collapse;
