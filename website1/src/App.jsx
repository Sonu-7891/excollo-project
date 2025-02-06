import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactForm from "./Pages/ContactFormPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import { Box } from "@mui/material";
import "./App.css";
import ServicesPage from "./Pages/ServicesPage";
import CustomCursor from "./Components/CursorEffect/CursorEffetct";
import ScrollRestoration from "./Pages/ScrollToTop";
import { CursorProvider } from "./Components/CursorEffect/context/CursorContext";

const setupScrollRestoration = () => {
  if ("scrollRestoration" in window.history) {
    // Prevent browser's default scroll restoration
    window.history.scrollRestoration = "manual";

    window.addEventListener("popstate", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }
};
const App = () => {
  useEffect(() => {
    setupScrollRestoration();
  }, []);
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <CustomCursor />
      
        {/* <ScrollToTop/> */}
        {/* <ScrollRestoration> */}
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/privacy&policy" element={<PrivacyPolicy />} />
            <Route path="/termsofservice" element={<TermsOfService />} />
          </Routes>
        {/* </ScrollRestoration> */}
      </Box>
    </Router>
  );
};

export default App;
