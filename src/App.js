import React from "react";
import NewsList from "./components/NewsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/*" element={<NewsDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}
