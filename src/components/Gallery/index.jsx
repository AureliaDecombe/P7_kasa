import Card from "../Card";
import { Link } from "react-router-dom";
import { galleryList } from "../../data/galleryList";

export default function HomePageGallery() {
  return (
    <div className='gallery'>
      {galleryList.map((card) => (
        <Link key={`gallery-${card.id}`} to={`/ToRent/${card.id}`}>
          <Card title={card.title} cover={card.cover} />
        </Link>
      ))}
    </div>
  );
}
