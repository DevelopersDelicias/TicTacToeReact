import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-weight: 800;
  width: 200px;
  display: inline-block;
  text-align: right;
  margin-right: 40px;
`

const Section = ({ id, label, message }) => {
  return (
    <div className='section' id={id}>
      <StyledLabel>{label}</StyledLabel>
      <span>{message}</span>
    </div>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.any.isRequired,
}

export default Section
