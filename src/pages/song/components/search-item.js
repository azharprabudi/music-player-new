import React from "react";
import "@styles/song.styl";

const SearchItem = ({ trackName, albumName, artistName }) => (
  <a href="javascript:void(0)" className="search__dropdown__item">
    <h6 className="search__dropdown__item__title">{trackName}</h6>
    <h6 className="search__dropdown__item__subtitle">Artist : {artistName}</h6>
    <h6 className="search__dropdown__item__subtitle">Album : {albumName}</h6>
  </a>
);

export default SearchItem;
