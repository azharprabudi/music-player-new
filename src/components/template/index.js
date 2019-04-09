import React from "react";
import SideBar from "@components/template/components/sidebar";
import Content from "@components/template/components/content";
import "@styles/template.styl";

const Template = () => (
  <div className="container">
    <SideBar />
    <Content />
  </div>
);

export default Template;
