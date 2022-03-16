import React from 'react'
import PropTypes from 'prop-types'

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
  onReset: PropTypes.func.isRequired,
}

export default ToolBar
