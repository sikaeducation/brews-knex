function beers() {
  fetch('/beers')
    .then(res => res.json())
    .then(showBeers);
}

function breweries() {
  fetch('/breweries')
    .then(res => res.json())
    .then(showBreweries);
}

function breweriesBeers(id) {
  fetch(`/breweries/${id}/beers`)
    .then(res => res.json())
    .then(showBeers);
}
