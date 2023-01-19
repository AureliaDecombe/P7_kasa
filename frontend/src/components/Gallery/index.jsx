import Card from "../Card";
import { Link } from "react-router-dom";
import { galleryList } from "../../Data/galleryList";

export default function HomePageGallery() {
  return (
    <div className='gallery'>
      {galleryList.map((card, index) => (
        <Link key={`gallery-${card.id}`} to={`/card/${card.id}`}>
          <Card title={card.title} cover={card.cover} />
        </Link>
      ))}
    </div>
  );
}
