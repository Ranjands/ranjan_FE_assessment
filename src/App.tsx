import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./components/ListingPage/ListingPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/university/:name" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
