import SongPage from "@pages/song";
import AlbumPage from "@pages/album";
import ArtistPage from "@pages/artist";
import RecentlyPlayedPage from "@pages/recently-played";
import FavoritePage from "@pages/favorite";

const Routes = [
  {
    group: "Common",
    children: [
      {
        name: "Song",
        path: "/",
        icon: "fa fa-compact-disc",
        exact: true,
        component: SongPage
      },
      {
        name: "Album",
        path: "/album",
        icon: "fa fa-images",
        exact: true,
        component: AlbumPage
      },
      {
        name: "Artist",
        path: "/artist",
        icon: "fa fa-user",
        exact: true,
        component: ArtistPage
      }
    ]
  },
  {
    group: "History",
    children: [
      {
        name: "Recently Played",
        path: "/recent-played",
        icon: "fa fa-compact-disc",
        exact: true,
        component: RecentlyPlayedPage
      },
      {
        name: "Favorite Song",
        path: "/favorite-song",
        icon: "fa fa-star",
        exact: true,
        component: FavoritePage
      }
    ]
  }
];

export default Routes;
