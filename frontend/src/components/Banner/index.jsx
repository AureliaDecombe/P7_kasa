import Banner from "../../assets/banner.svg";

export default function HomePageBanner() {
  return (
    <div className='banner'>
      <div className='banner__background' />
      <div className='banner__img'>
        <img src={Banner} alt='Bannière'></img>
      </div>
      <span className='banner__span'>Chez vous, partout et ailleurs</span>
    </div>
  );
}
