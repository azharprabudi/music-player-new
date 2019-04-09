import React from "react";
import SideBar from "@pages/homepage/components/sidebar";
import Content from "@pages/homepage/components/content";
import "@styles/template.styl";

const Homepage = () => (
  <div className="container">
    <SideBar />
    <Content />
  </div>
);

export default Homepage;
