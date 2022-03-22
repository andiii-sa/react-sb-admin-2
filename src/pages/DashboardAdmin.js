import React from "react";

import Sidebar from "components/Navigation/Sidebar";
import Topbar from "components/Navigation/Topbar";
import PageHeading from "components/PageHeading";
import Footer from "components/Footer";

import ContentDashboard from "parts/ContentDashboard";

export default function DashboardAdmin() {
  return (
    <>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <PageHeading title="Dashboard" />
            <ContentDashboard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
