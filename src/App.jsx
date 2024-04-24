// import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./componenents/molecules/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import PageNotFound from "./pages/PageNotFound";
import Navbar from "./componenents/molecules/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </div>
  );
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portofolio" element={<Portofolio />} />
    </Routes>
  );
}

export default App;
