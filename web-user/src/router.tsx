import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import type { FC } from "react";
import Layout from "./layout/Layout";

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          {/* Add more pages here, e.g.:
          <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
