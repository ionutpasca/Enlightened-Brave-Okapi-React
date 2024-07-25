import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <h1>
        {props.heading ?? (
          <fragment>
            <span className="component2-text1">Heading</span>
          </fragment>
        )}
      </h1>
    </div>
  )
}

Component2.defaultProps = {
  heading: undefined,
}

Component2.propTypes = {
  heading: PropTypes.element,
}

export default Component2
