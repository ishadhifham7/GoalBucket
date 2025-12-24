import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { BucketDetailPage } from "../pages/bucket-detail/BucketDetailPage";
// import { NotFoundPage } from "../pages/not-found/NotFoundPage";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/bucket/:id" element={<BucketDetailPage />} />
        {/*<Route path="*" element={<NotFoundPage />} />*/}
      </Routes>
    </Router>
  );
};
