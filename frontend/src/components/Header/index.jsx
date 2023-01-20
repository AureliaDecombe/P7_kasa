import Logo from "../../assets/lightLogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='headerDiv'>
      <Link to={`/`} className='headerDiv__logo'>
        <img src={Logo} alt='logo KASA'></img>
      </Link>
      <nav className='headerDiv__nav'>
        <Link to={`/`}>Accueil</Link>
        <Link to={`About`}>À Propos</Link>
      </nav>
    </header>
  );
}
