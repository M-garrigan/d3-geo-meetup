import React from 'react';

import '../styles/BottomControl.css';

export default ({height, width, currentSlide, setCurrentSlide}) => {
  const height80 = Math.round(height * 0.8);

  return (
    <div className="bottomcontrol-wrapper">

      <div 
          className="bottomcontrol-button" 
          onClick={() => setCurrentSlide(currentSlide => currentSlide - 1)}
        >
          <svg
            className="svg-angles-button"
            height={height}
            viewBox="0 0 448 512"
            width={height * 0.9}
          >
            <path
              d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"
            />
          </svg>
        </div>

        <div className="bottomcontrol-thumbnail-wrapper">

          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height80, width: height80 * 1.33}}
          ></div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height80, width: height80 * 1.33}}
          ></div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height80, width: height80 * 1.33}}
          ></div>
          <div 
            className="bottomcontrol-thumbnail-button-center"
            style={{height: height, width: height * 1.33}}
          ></div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height80, width: height80 * 1.33}}
          ></div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height80, width: height80 * 1.33}}
          ></div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height80, width: height80 * 1.33}}
          ></div>
          
        </div>

        <div 
          className="bottomcontrol-button" 
          onClick={() => setCurrentSlide(currentSlide => currentSlide + 1)}
        >
          <svg
            className="svg-angles-button"
            height={height}
            viewBox="0 0 448 512"
            width={height * 0.9}
          >
            <path
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </div>
    </div>
  );
};