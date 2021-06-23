const routes = [
  {
    url: '/',
    view: viewsByName['home']
  },
  {
    url: '/beers',
    controller: beers,
    view: viewsByName['beers']
  },
  {
    url: '/breweries',
    controller: breweries,
    view: viewsByName['breweries']
  },
  {
    url: '/breweries/(.*)/beers',
    controller: breweriesBeers,
    view: viewsByName['beers']
  }
];

const router = new Router(routes);
router.loadView();
