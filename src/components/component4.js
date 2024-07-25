import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <h1>
        {props.heading ?? (
          <fragment>
            <span className="component4-text1">
              <span className="component4-text2">Headsa</span>
              <br className="component4-text3"></br>
              <span className="component4-text4">dsa</span>
              <span className="component4-text5">dsadsa</span>
              <span className="component4-text6">dsa</span>
              <br className="component4-text7"></br>
              <span className="component4-text8">bgfbgfbgfding</span>
            </span>
          </fragment>
        )}
      </h1>
    </div>
  )
}

Component4.defaultProps = {
  heading: undefined,
}

Component4.propTypes = {
  heading: PropTypes.element,
}

export default Component4
