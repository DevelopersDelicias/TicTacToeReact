import { func } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: 10px auto;
  padding: 5px 20px;
  text-align: center;
`

const PrimaryButton = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;

  background-color: blue;
  color: #fff;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`
const ToolBar = ({ onReset }) => {
  return (
    <StyledDiv>
      <PrimaryButton onClick={onReset}>Reset Game</PrimaryButton>
    </StyledDiv>
  )
}

ToolBar.propTypes = {
  onReset: func.isRequired,
}

export default ToolBar
