import AboutPageBanner from "../../components/Banner/AboutPage";
import Collapse from "../../components/Collapse";
import { aboutList } from "../../data/aboutList";

export default function AboutPage() {
  return (
    <div className='About'>
      <div className='mainWrapper'>
        <AboutPageBanner />
        <ul className='collapseElement'>
          {aboutList.map(({ id, title, content }) => (
            <Collapse key={id} title={title} content={content} />
          ))}
        </ul>
      </div>
    </div>
  );
}
