import { useState } from "react";

export default function Carousel({ pictures }) {
  const [pictureShown, changePicture] = useState(0);
  const imgNumber = pictures.length;

  const previousPicture = () =>
    changePicture(pictureShown === 0 ? imgNumber - 1 : pictureShown - 1);
  const nextPicture = () =>
    changePicture(pictureShown === imgNumber - 1 ? 0 : pictureShown + 1);

  return (
    <div className='carousel'>
      {imgNumber > 1 && (
        <svg
          className='arrow arrow__left'
          alt='Image précédente'
          onClick={previousPicture}
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
      {pictures.map((image, index) => (
        <img
          key={index}
          className={
            index === pictureShown ? "picture picture--active" : " picture"
          }
          src={image}
          alt='Logement'
        />
      ))}
      {imgNumber > 1 && (
        <svg
          className='arrow arrow__right'
          alt='Image suivante'
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
      <div className='carousel__info'>
        {pictureShown + 1}/{imgNumber}
      </div>
    </div>
  );
}
