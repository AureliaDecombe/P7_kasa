import { useState } from "react";
import "../../assets/goLeft.svg";
import "../../assets/goRight.svg";

export default function Carousel({ pictures }) {
  let [pictureShown, changePicture] = useState(0);
  let imgNumber = pictures.length;

  const imgPrecedente = () => {
    if (pictureShown === 0) {
      changePicture(imgNumber - 1);
    } else {
      changePicture(pictureShown - 1);
    }
    return changePicture;
  };

  const nextPicture = () => {
    if (pictureShown === imgNumber - 1) {
      changePicture((imgNumber = 0));
    } else {
      changePicture(pictureShown + 1);
    }
    return changePicture;
  };

  return (
    <div className='carrousel'>
      {imgNumber > 1 && (
        <svg
          className='arrow arrow__left'
          alt='Contenu précédent'
          onClick={imgPrecedente}
          width='48'
          height='80'
          viewBox='0 0 48 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z'
            fill='white'
          />
        </svg>
      )}
      {pictures.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === pictureShown ? "picture picture--active" : "picture"
            }
            src={image}
            alt='Logement'
          />
        );
      })}
      {imgNumber > 1 && (
        <svg
          className='arrow arrow__right'
          alt='Contenu suivant'
          onClick={nextPicture}
          width='48'
          height='80'
          viewBox='0 0 48 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z'
            fill='white'
          />
        </svg>
      )}
    </div>
  );
}
