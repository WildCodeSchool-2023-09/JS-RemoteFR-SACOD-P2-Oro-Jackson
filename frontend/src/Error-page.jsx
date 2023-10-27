import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Oops! 🥴</h2>
      <p>Erreur n°</p>
      <p>404</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
