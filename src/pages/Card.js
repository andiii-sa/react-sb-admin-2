import Footer from "components/Footer";
import Sidebar from "components/Navigation/Sidebar";
import Topbar from "components/Navigation/Topbar";
import PageHeading from "components/PageHeading";
import ContentCard from "parts/ContentCard";
import React from "react";

export default function Card() {
  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <PageHeading title="Cards" />
            <ContentCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
