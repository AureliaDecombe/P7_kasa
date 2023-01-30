import Collapse from "../../components/Collapse";
import { aboutList } from "../../data/aboutList";

export default function AboutPage() {
  return (
    <main className='mainWrapper'>
      <ul className='collapseElement'>
        {aboutList.map(({ id, title, content }) => (
          <Collapse key={id} title={title} content={content} />
        ))}
      </ul>
    </main>
  );
}
