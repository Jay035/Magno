import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
// const Login = lazy(() => import("./pages/Login"));
// const SignUp = lazy(() => import("./pages/SignUp"));
const Activities = lazy(() => import("./pages/Activities"));
const Events = lazy(() => import("./pages/Events"));

function App() {
  return (
    <div className="scroll-smooth bg-[#06070B] text-white/90 h-full">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 3500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
};
