import React from 'react'

import PropTypes from 'prop-types'

import './component6.css'

const Component6 = (props) => {
  return (
    <div className="component6-container">
      <a href={props.textUrl} target="_blank" rel="noreferrer noopener">
        {props.text ?? (
          <fragment>
            <span className="component6-text">Link</span>
          </fragment>
        )}
      </a>
    </div>
  )
}

Component6.defaultProps = {
  textUrl: 'https://example.com',
  text: undefined,
}

Component6.propTypes = {
  textUrl: PropTypes.string,
  text: PropTypes.element,
}

export default Component6
