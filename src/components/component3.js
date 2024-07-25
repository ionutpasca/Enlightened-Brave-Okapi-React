import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <h1>
        {props.heading ?? (
          <fragment>
            <span className="component3-text1">
              <span>Headsa</span>
              <br></br>
              <span>dsadsadsadsa</span>
              <br></br>
              <span>bgfbgfbgfding</span>
            </span>
          </fragment>
        )}
      </h1>
    </div>
  )
}

Component3.defaultProps = {
  heading: undefined,
}

Component3.propTypes = {
  heading: PropTypes.element,
}

export default Component3
