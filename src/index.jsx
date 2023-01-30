import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ToRentPage from "./pages/ToRent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/Error";
import "./style/index.scss";

function Root() {
  return (
    <>
      <div className='pageWrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='About' element={<AboutPage />} />
          <Route path='ToRent/:id' element={<ToRentPage />} />
          <Route path='Error' element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/ToRent/:id",
        element: <ToRentPage />,
      },
    ],
  },
  {
    path: "/Error",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
