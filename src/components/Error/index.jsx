import { Link, useRouteError } from "react-router-dom";
import ErrorImg from "../../assets/404.svg";
import Logo from "../../assets/lightLogo.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className='errorPage'>
        <header className='errorPage__headerDiv'>
          <div className='errorPage__headerDiv--logo'>
            <img src={Logo} alt='logo KASA'></img>
          </div>
          <nav className='errorPage__headerDiv--nav'>
            <Link to={`/`}>Accueil</Link>
            <Link to={`About`}>À Propos</Link>
          </nav>
        </header>
        <img className='errorPage__logo' src={ErrorImg} alt='Erreur 404'></img>
        <span className='errorPage__span'>
          Oops! La page que vous demandez n'existe pas.
        </span>
        <Link to={`Home`} className='errorPage__link'>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}
