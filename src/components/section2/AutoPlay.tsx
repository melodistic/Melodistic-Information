import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import '/src/styles/section2/Autoplay.css'

interface ConfusionMatrixData {
    image: string;
    label: string;
  }
export const AutoplayExample = () => {
  const options = {
    type         : 'loop',
    gap          : '5rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
  };

  const confusionList: Array<ConfusionMatrixData> = [
    {
      image: "images/mobilenet.png",
      label: "MobileNetV2",
    },
    {
      image: "images/inception.png",
      label: "InceptionV3",
    },
    {
      image: "images/cnn.png",
      label: "CNN Model",
    },
  ];

  return (
    <div>
      <Splide
        options={ options }
        aria-labelledby="autoplay-example-heading"
        hasTrack={ false }
      >
        <div style={ { position: 'relative' } }>
          <SplideTrack>
            { confusionList.map( slide => (
              <SplideSlide key={ slide.image }>
                <img src={ slide.image } alt={ slide.label }/>
                <div style={{textAlign: 'center'}}>{slide.label}</div>
              </SplideSlide>
            ) ) }
          </SplideTrack>
        </div>

      </Splide>
    </div>
  );
};