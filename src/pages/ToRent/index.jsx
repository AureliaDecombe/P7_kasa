import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import ErrorPage from "../../components/Error";
import { galleryList } from "../../data/galleryList";
import "../../assets/full-star.svg";
import "../../assets/empty-star.svg";

export default function ToRentPage() {
  const { id } = useParams();

  const PlaceToRentData = galleryList.find(
    (placeToRent) => placeToRent.id === id
  );

  const placeToRentTags = PlaceToRentData?.tags.map((tags, index) => {
    return <p key={index}>{tags}</p>;
  });

  const Equipments = PlaceToRentData?.equipments.map((equipment, index) => {
    return <p key={index}>{equipment}</p>;
  });

  return (
    <>
      {PlaceToRentData ? (
        <div key={`toRentMain-${PlaceToRentData.id}`} className='TRmain'>
          <div className='TRcarousel-section'>
            <Carousel pictures={PlaceToRentData?.pictures} />
          </div>
          <div
            key={`header-${PlaceToRentData.id}`}
            className='TRheader-section'
          >
            <div className='TRheader-left'>
              <div className='TRheader-left__description'>
                <h1 key={`headerTitle-${PlaceToRentData.id}`}>
                  {PlaceToRentData.title}
                </h1>
                <h2 key={`headerLocation-${PlaceToRentData.id}`}>
                  {PlaceToRentData.location}
                </h2>
              </div>
              <div>
                <div className='TRheader-left__tags'>{placeToRentTags}</div>
              </div>
            </div>
            <div className='TRheader-right'>
              <div className='TRheader-right__owner'>
                <p key={`headerOwner-${PlaceToRentData.id}`}>
                  {PlaceToRentData.host.name}
                </p>
                <img
                  key={`headerPicture-${PlaceToRentData.id}`}
                  className='TRheader-right__picture'
                  src={PlaceToRentData.host.picture}
                  alt='Portait du propriétaire du bien'
                />
              </div>
              <div
                key={`headerRating-${PlaceToRentData.id}`}
                className='TRheader-right__rating'
              >
                {showStars(PlaceToRentData.rating)}
              </div>
            </div>
          </div>
          <div
            key={`collapse-${PlaceToRentData.id}`}
            className='TRcollapse-section'
          >
            <ul>
              <Collapse
                key={`collapseTitle-${PlaceToRentData.id}`}
                title='Description'
                content={PlaceToRentData.description}
              />
              <Collapse
                key={`collapseEquip-${PlaceToRentData.id}`}
                title='Équipements'
                content={Equipments}
              />
            </ul>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

function showStars(rating, index) {
  let placeToRentRating = [];

  for (let fullStars = 0; fullStars < 5; fullStars++) {
    if (fullStars < rating)
      placeToRentRating.push(
        <svg
          key={index}
          className='star'
          alt='étoile pleine'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z'
            fill='#FF6060'
          />
        </svg>
      );
    else {
      placeToRentRating.push(
        <svg
          key={index}
          className='star'
          alt='étoile vide'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z'
            fill='#E3E3E3'
          />
        </svg>
      );
    }
  }

  return placeToRentRating;
}
