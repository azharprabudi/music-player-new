import React, { PureComponent, Fragment } from "react";
import SideBar from "@components/template/sidebar";
import PropTypes from "prop-types";
import "@styles/template.styl";

class Template extends PureComponent {
  render() {
    return (
      <div className="container">
        <SideBar />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Template;
