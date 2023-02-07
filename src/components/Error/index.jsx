import { Link, useRouteError } from "react-router-dom";
import ErrorImg from "../../assets/404.svg";
import Footer from "../Footer";
import Header from "../Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='errorPageBody'>
      <Header />
      <div className='errorPage'>
        <img className='errorPage__logo' src={ErrorImg} alt='Erreur 404'></img>
        <span className='errorPage__span'>
          Oops! La page que vous demandez n'existe pas.
        </span>
        <Link to={`/`} className='errorPage__link'>
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}
