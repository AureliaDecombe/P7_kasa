import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/index.scss";

export default function App() {
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
