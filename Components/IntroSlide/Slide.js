import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {slides} from './defaultSlide';

import AppIntroSlider from 'react-native-app-intro-slider';

const Slide = ({skipButton, arraySlide, isShowing}) => {
  const [showing, setShowing] = useState(isShowing);

  const handleDone = () => {
    setShowing(!isShowing);
  };

  const handleSkip = () => {
    setShowing(!isShowing);
  };

  return (
    <>
      {showing && (
        <AppIntroSlider
          slides={arraySlide}
          onDone={handleDone}
          onSkip={handleSkip}
          showSkipButton={skipButton}
        />
      )}
    </>
  );
};

Slide.propTypes = {
  skipButton: PropTypes.bool,
  arraySlide: PropTypes.array,
};

Slide.defaultProps = {
  skipButton: false,
  arraySlide: slides,
};

export default Slide;
