import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";
import Contact from "./pages/Contact";
import App from "./App";
import MostPopular from "./pages/MostPopular";
import MakeADrink from "./pages/MakeADrink";
import RandomCocktail from "./pages/RandomCocktail";
import Accueil from "./pages/Accueil";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "makeadrink",
        element: <MakeADrink />,
      },
      {
        path: "mostpopular",
        element: <MostPopular />,
      },
      {
        path: "random",
        element: <RandomCocktail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
