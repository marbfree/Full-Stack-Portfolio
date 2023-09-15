import React, { useState } from "react";
import Home from "../pages/Home";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";
import Projects from "../pages/Project";
import NavTabs from "./Header";
import Resume from "../pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Bio") {
      return <Bio />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ minHeight: "100vh" }}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
