import { func } from 'prop-types'
import React from 'react'

const ToolBar = ({ onReset }) => {
  return (
    <div className='toolbar'>
      <button onClick={onReset} className='btn btn-primary'>
        Reset Game
      </button>
    </div>
  )
}

ToolBar.propTypes = {
  onReset: func.isRequired,
}

export default ToolBar
