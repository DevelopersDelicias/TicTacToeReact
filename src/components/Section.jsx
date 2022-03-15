import React from "react";
import PropTypes from "prop-types";

const Section = ({ id, label, message }) => {
  return (
    <div className="section" id={id}>
      <label>{label}</label>
      <span>{message}</span>
    </div>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.any.isRequired,
};

export default Section;
