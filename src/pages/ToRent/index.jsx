import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import { galleryList } from "../../data/galleryList";
import "../../assets/full-star.svg";
import "../../assets/empty-star.svg";

export default function ToRentPage() {
  const { id } = useParams();
  const PlaceToRentData = galleryList.find(
    (placeToRent) => placeToRent.id === id
  );

  return PlaceToRentData ? (
    <main className='TRmain'>
      <section className='TRcarousel-section'>
        <Carousel pictures={PlaceToRentData.pictures} />
      </section>
      <section className='TRheader-section'>
        <div className='TRheader-left'>
          <div className='TRheader-left__description'>
            <h1>{PlaceToRentData.title}</h1>
            <h2>{PlaceToRentData.location}</h2>
          </div>
          <div className='TRheader-left__tags'>
            {PlaceToRentData.tags.map((tags, index) => (
              <p key={index}>{tags}</p>
            ))}
          </div>
        </div>
        <aside className='TRheader-right'>
          <div className='TRheader-right__owner'>
            <p>{PlaceToRentData.host.name}</p>
            <img
              className='TRheader-right__picture'
              src={PlaceToRentData.host.picture}
              alt='Portait du propriétaire du bien'
            />
          </div>
          <div className='TRheader-right__rating'>
            {showStars(PlaceToRentData.rating)}
          </div>
        </aside>
      </section>
      <section className='TRcollapse-section'>
        <ul>
          <Collapse title='Description' content={PlaceToRentData.description} />
          <Collapse
            title='Équipements'
            content={PlaceToRentData.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </ul>
      </section>
    </main>
  ) : (
    <Navigate to='/Error' />
  );
}

function showStars(rating, index) {
  let placeToRentRating = [];

  for (let fullStars = 0; fullStars < 5; fullStars++) {
    placeToRentRating.push(
      <svg
        key={`${index}-${fullStars}`}
        className='star'
        alt={fullStars < rating ? "étoile pleine" : "étoile vide"}
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z'
          fill={fullStars < rating ? "#FF6060" : "#E3E3E3"}
        />
      </svg>
    );
  }
  return placeToRentRating;
}
