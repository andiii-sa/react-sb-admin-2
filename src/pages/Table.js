import Footer from "components/Footer";
import Sidebar from "components/Navigation/Sidebar";
import Topbar from "components/Navigation/Topbar";
import PageHeading from "components/PageHeading";
import ContentTable from "parts/ContentTable";
import React from "react";

export default function Table() {
  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <PageHeading title="Tables" />
            <ContentTable />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
