const beers = [
  {
    "beer_name": "Yellow Fever",
    "brewery_name": "Comrade",
    "id": 1,
    "name": "Comrade",
    "abv": 5.0,
    "brewery_id": 1,
    "city": "Denver",
    "state": "CO"
  },
  {
    "beer_name": "Redcon",
    "brewery_name": "Comrade",
    "id": 1,
    "name": "Comrade",
    "abv": 5.7,
    "brewery_id": 1,
    "city": "Denver",
    "state": "CO"
  },
  {
    "beer_name": "True Blonde Ale",
    "brewery_name": "Ska",
    "id": 2,
    "name": "Ska",
    "abv": 5.0,
    "brewery_id": 2,
    "city": "Durango",
    "state": "CO"
  },
  {
    "beer_name": "Modus Hoperandi IPA",
    "brewery_name": "Ska",
    "id": 2,
    "name": "Ska",
    "abv": 6.8,
    "brewery_id": 2,
    "city": "Durango",
    "state": "CO"
  }
];

const breweries = [
  {
    "id": 1,
    "name": "Comrade",
    "city": "Denver",
    "state": "CO"
  },
  {
    "id": 2,
    "name": "Ska",
    "city": "Durango",
    "state": "CO"
  }
];

const beersByBrewery = {
  1: [
    {
      "beer_name": "Yellow Fever",
      "brewery_name": "Comrade",
      "id": 1,
      "name": "Comrade",
      "abv": 5.0,
      "brewery_id": 1,
      "city": "Denver",
      "state": "CO"
    },
    {
      "beer_name": "Redcon",
      "brewery_name": "Comrade",
      "id": 2,
      "name": "Comrade",
      "abv": 5.7,
      "brewery_id": 1,
      "city": "Denver",
      "state": "CO"
    }
  ],
  2: [
    {
      "beer_name": "True Blonde Ale",
      "brewery_name": "Ska",
      "id": 3,
      "name": "Ska",
      "abv": 5.0,
      "brewery_id": 2,
      "city": "Durango",
      "state": "CO"
    },
    {
      "beer_name": "Modus Hoperandi IPA",
      "brewery_name": "Ska",
      "id": 4,
      "name": "Ska",
      "abv": 6.8,
      "brewery_id": 2,
      "city": "Durango",
      "state": "CO"
    }
  ]
}

module.exports = {
  beers,
  breweries,
  beersByBrewery
}
