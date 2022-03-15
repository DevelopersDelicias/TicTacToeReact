import React from "react";
import PropTypes from "prop-types";

const Section = ({ label, message }) => {
  return (
    <div>
      <label>{label}</label>
      <span>{message}</span>
    </div>
  );
};

Section.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.any.isRequired,
};

export default Section;
