import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/lightLogo.svg";
import Banner from "../Banner";

export default function Header() {
  const location = useLocation();
  return (
    <header>
      <div className='headerDiv'>
        <Link to={`/`} className='headerDiv__logo'>
          <img src={Logo} alt='logo KASA'></img>
        </Link>
        <nav className='headerDiv__nav'>
          <Link to='/' className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
          <Link
            to='/About'
            className={location.pathname === "/About" ? "active" : ""}
          >
            À propos
          </Link>
        </nav>
      </div>
      <div className='bannerDiv'>
        {location.pathname === "/" ? (
          <Banner text='Chez vous, partout et ailleurs' />
        ) : location.pathname === "/About" ? (
          <Banner additionalClass='banner--about' />
        ) : null}
      </div>
    </header>
  );
}
