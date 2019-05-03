import React, { PureComponent } from "react";
import compose from "redux/src/compose";
import { connect } from "react-redux";
import { fetchPopularSongs } from "@actions/song";
import Search from "@pages/song/components/search";

class SongPage extends PureComponent {
  componentDidMount() {
    // this.props.fetchPopularSongs();
  }

  render() {
    return (
      <div>
        <Search />
        <h1>Song Page</h1>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    {
      fetchPopularSongs
    }
  )
)(SongPage);
