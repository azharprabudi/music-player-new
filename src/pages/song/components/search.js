import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { searchSong } from "@actions/song";
import "@styles/song.styl";

class Search extends PureComponent {
  _onChangeSearch = ({ target: { value } }) => {
    this.props.searchSong(value);
  };

  render() {
    return (
      <div className="search">
        <i className="fa fa-search search__icon" />
        <input
          type="text"
          placeholder="Search for music, artist or album"
          className="search__input"
          onChange={this._onChangeSearch}
        />
        <div className="search__dropdown">
          <h1>helo</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default compose(
  connect(
    mapStateToProps,
    {
      searchSong
    }
  )
)(Search);
