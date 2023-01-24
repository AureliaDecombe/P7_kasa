import HomePageBanner from "../../components/Banner/HomePage";
import HomePageGallery from "../../components/Gallery";

export default function Home() {
  return (
    <div className='Home'>
      <div className='mainWrapper'>
        <HomePageBanner />
        <HomePageGallery />
      </div>
    </div>
  );
}
