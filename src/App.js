import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/* Inner Pages */
 import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import AboutUs from "pages/AboutUs";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "pages/BlogPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<BlogIndexPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-services" element={<TermsOfServicePage />} />
          <Route path="/posts/:id" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}
