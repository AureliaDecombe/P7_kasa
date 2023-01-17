import Banner from "../../assets/banner.svg";

export default function Home() {
  return (
    <div className='Home'>
      <h1>Home Page</h1>
      <div className='mainWrapper'>
        <div className='banner'>
          <img src={Banner} alt='Bannière'></img>
        </div>
        <div className='features'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
          ornare arcu odio ut sem nulla pharetra. Augue lacus viverra vitae
          congue eu. Neque vitae tempus quam pellentesque nec. Eros donec ac
          odio tempor. Magna sit amet purus gravida quis. Nibh ipsum consequat
          nisl vel pretium lectus quam. Eu lobortis elementum nibh tellus
          molestie nunc non blandit massa. Erat velit scelerisque in dictum.
          Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Platea
          dictumst vestibulum rhoncus est pellentesque elit. Enim diam vulputate
          ut pharetra sit amet aliquam. Ipsum faucibus vitae aliquet nec
          ullamcorper. Risus viverra adipiscing at in tellus integer. Viverra
          adipiscing at in tellus integer feugiat scelerisque.
        </div>
      </div>
    </div>
  );
}
