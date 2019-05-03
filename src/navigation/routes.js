const Routes = [
  {
    group: "Common",
    children: [
      {
        name: "Song",
        path: "/",
        icon: "fa fa-compact-disc",
        exact: true
      },
      {
        name: "Album",
        path: "/album",
        icon: "fa fa-images",
        exact: true
      },
      {
        name: "Artist",
        path: "/artist",
        icon: "fa fa-user",
        exact: true
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
        exact: true
      },
      {
        name: "Favorite Song",
        path: "/favorite-song",
        icon: "fa fa-star",
        exact: true
      }
    ]
  }
];

export default Routes;
