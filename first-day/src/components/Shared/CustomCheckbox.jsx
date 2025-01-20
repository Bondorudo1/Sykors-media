import { useState } from "react";
import PropTypes from "prop-types";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="d-flex align-items-center">
      <label className="custom-checkbox">
        <input type="checkbox" checked={checked} onChange={toggleCheckbox} />
        <span className={`checkbox-box ${checked ? "checked" : ""}`}></span>
      </label>

      {text && <span className="checkbox-text">{text}</span>}
    </div>
  );
};


CustomCheckbox.propTypes = {
  text: PropTypes.string.isRequired, 
};

export default CustomCheckbox;
