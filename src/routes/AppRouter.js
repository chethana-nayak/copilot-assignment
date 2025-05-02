import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from "../pages/Articles";
import ArticleDetails from "../pages/ArticleDetails";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
