import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <button type="button" className="component1-button button">
        <span>
          {props.text ?? (
            <fragment>
              <span className="component1-text1">
                <span>Buttdsadsa</span>
                <br></br>
                <span>vdfbgfbgfon</span>
              </span>
            </fragment>
          )}
        </span>
      </button>
    </div>
  )
}

Component1.defaultProps = {
  text: undefined,
}

Component1.propTypes = {
  text: PropTypes.element,
}

export default Component1
