import React from "react";

import SideNav from "./SideNav";
import MainFeed from "./MainFeed";
import ProfilePanel from "./ProfilePanel";

const Layout = () => {
  return (
    <div className="layout-grid">
      <SideNav />
      <MainFeed />
      <ProfilePanel />
    </div>
  );
};

export default Layout;
