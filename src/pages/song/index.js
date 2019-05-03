import React, { PureComponent } from "react";

class SongPage extends PureComponent {
  componentDidMount() {
    this.props.fetchPopularSongs();
  }

  render() {
    return (
      <div>
        <h1>Song Page</h1>
      </div>
    );
  }
}

export default SongPage;
