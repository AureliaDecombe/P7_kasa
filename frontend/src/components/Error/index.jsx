import { Link, useRouteError } from "react-router-dom";
import ErrorImg from "../../assets/404.svg";
import styled from "styled-components";

const StyledMessage = styled.p`
  font-size: 36px;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <img src={ErrorImg} alt='Erreur 404'></img>
      <StyledMessage>
        Oops! La page que vous demandez n'existe pas.
      </StyledMessage>
      <Link to={`Home`}>Retourner sur la page d'accueil</Link>
    </div>
  );
}
