import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/Error";
import "./style/index.scss";

export default function Root() {
  return (
    <>
      <div className='pageWrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
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
        element: <About />,
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
