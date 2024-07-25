import React from 'react'

import PropTypes from 'prop-types'

import './component8.css'

const Component8 = (props) => {
  return (
    <div className="component8-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="component8-image"
      />
      <h1>
        {props.heading ?? (
          <fragment>
            <span className="component8-text07">
              <span>Hea</span>
              <span className="component8-text09">ddsa</span>
              <br className="component8-text10"></br>
              <span className="component8-text11">dsad</span>
              <span>saing</span>
            </span>
          </fragment>
        )}
      </h1>
      <span>
        {props.text ?? (
          <fragment>
            <span className="component8-text16">Text</span>
          </fragment>
        )}
      </span>
      <a href={props.textUrl} target="_blank" rel="noreferrer noopener">
        {props.text1 ?? (
          <fragment>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="component8-link1"
            >
              <span>Li</span>
              <span className="component8-text14">n</span>
              <span>k</span>
            </a>
          </fragment>
        )}
      </a>
      <button type="button" className="button">
        <label>
          {props.text2 ?? (
            <fragment>
              <span className="component8-text03">
                <span>Butdsadsadsa</span>
                <br></br>
                <span>vfdbgfton</span>
              </span>
            </fragment>
          )}
        </label>
      </button>
    </div>
  )
}

Component8.defaultProps = {
  text2: undefined,
  heading: undefined,
  text1: undefined,
  imageAlt: 'image',
  textUrl: 'https://example.com',
  text: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Component8.propTypes = {
  text2: PropTypes.element,
  heading: PropTypes.element,
  text1: PropTypes.element,
  imageAlt: PropTypes.string,
  textUrl: PropTypes.string,
  text: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default Component8
