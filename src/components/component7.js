import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className="component7-container">
      <h1 className="button">
        {props.heading ?? (
          <fragment>
            <span className="component7-text1">Heading</span>
          </fragment>
        )}
      </h1>
    </div>
  )
}

Component7.defaultProps = {
  heading: undefined,
}

Component7.propTypes = {
  heading: PropTypes.element,
}

export default Component7
