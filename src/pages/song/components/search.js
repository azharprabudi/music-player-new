import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "@styles/song.styl";

const Search = () => (
  <div className="search">
    <i className="fa fa-search search__icon" />
    <input
      type="text"
      placeholder="Search for music, artist or album"
      className="search__input"
      onChange={() => {}}
    />
    <div className="search__dropdown" />
  </div>
);

const mapStateToProps = state => ({});

export default compose(
  connect(
    mapStateToProps,
    {}
  )
)(Search);
