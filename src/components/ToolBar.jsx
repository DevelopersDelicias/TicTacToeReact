import { func } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: 10px auto;
  padding: 5px 20px;
  text-align: center;
`
const ToolBar = ({ onReset }) => {
  return (
    <StyledDiv>
      <button onClick={onReset} className='btn btn-primary'>
        Reset Game
      </button>
    </StyledDiv>
  )
}

ToolBar.propTypes = {
  onReset: func.isRequired,
}

export default ToolBar
