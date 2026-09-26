import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import Home from "./Pages/Home";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster />

      {showBackToTop && (
        <button className="backToTop" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </Router>
  );
};

export default App;