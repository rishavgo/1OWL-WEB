import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import FeatureWithForm from "./components/FeatureWithForm";
import TestimonialsWithFooter from "./components/TestimonialsWithFooter";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <FeatureWithForm />
                <TestimonialsWithFooter />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
