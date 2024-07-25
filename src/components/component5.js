import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <button type="button" className="button">
        <span>
          {props.text ?? (
            <fragment>
              <span className="component5-text1">
                <span>Buttdsadsaihndsa</span>
                <br></br>
                <span>dsaiuhnduisan dsa dsaon</span>
              </span>
            </fragment>
          )}
        </span>
      </button>
    </div>
  )
}

Component5.defaultProps = {
  text: undefined,
}

Component5.propTypes = {
  text: PropTypes.element,
}

export default Component5
