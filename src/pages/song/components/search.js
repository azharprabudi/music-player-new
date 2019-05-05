import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { BeatLoader } from "react-spinners";
import SearchItem from "@pages/song/components/search-item";
import { searchSong, resetSearchSong } from "@actions/song";
import "@styles/song.styl";

class Search extends PureComponent {
  _onChangeSearch = ({ target: { value } }) => {
    this.props.searchSong(value);
  };

  _onBlurSearch = () => {
    this.props.resetSearchSong();
  };

  get renderSearchDropdown() {
    if (this.props.load) {
      return (
        <div className="search__dropdown__loading">
          <BeatLoader color="#5DC7D1" loading={true} size={12} />
        </div>
      );
    }

    if (this.props.items.length > 0) {
      return this.props.items.map(
        ({ track: { track_name, artist_name, album_name } }) => (
          <SearchItem
            trackName={track_name}
            artistName={artist_name}
            albumName={album_name}
          />
        )
      );
    }

    return null;
  }

  render() {
    return (
      <div className="search">
        <i className="fa fa-search search__icon" />
        <input
          type="text"
          placeholder="Search for music, artist or album"
          className="search__input"
          onChange={this._onChangeSearch}
          onBlur={this._onBlurSearch}
        />
        <div className="search__dropdown">{this.renderSearchDropdown}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ song: { loadSearch, itemsSearch } }) => ({
  load: loadSearch,
  items: itemsSearch
});

export default compose(
  connect(
    mapStateToProps,
    {
      searchSong,
      resetSearchSong
    }
  )
)(Search);
