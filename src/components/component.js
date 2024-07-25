import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <button type="button" className="app-component-button button">
        <span>
          {props.button ?? (
            <fragment>
              <span className="app-component-text1">Button</span>
            </fragment>
          )}
        </span>
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: undefined,
}

AppComponent.propTypes = {
  button: PropTypes.element,
}

export default AppComponent
