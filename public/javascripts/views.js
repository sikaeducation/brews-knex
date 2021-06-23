const views = document.querySelectorAll('.view');
const viewsByName = {};

[].forEach.call(views, (view) => {
  viewsByName[view.dataset.name] = view;
  view.style.display = 'none';
});

function showBeers(beers) {
  if(beers.length == 0) {
    document.querySelector('table').style.display = 'none';
    document.querySelector('.no-beers').style.display = '';
  } else {
    document.querySelector('table').style.display = ''
    document.querySelector('.no-beers').style.display = 'none';
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = beers.reduce((html, beer) => {
      return html + `
      <tr>
        <td class="brewery">${beer.brewery_name}</td>
        <td>${beer.beer_name}</td>
        <td>${beer.abv}</td>
      </tr>
      `;
    }, '');
  }
}

function showBreweries(breweries) {
  if(breweries.length == 0) {
    document.querySelector('.breweries').style.display = 'none';
    document.querySelector('.no-breweries').style.display = '';
  } else {
    document.querySelector('.breweries').style.display = ''
    document.querySelector('.no-breweries').style.display = 'none';
    const ul = document.querySelector('.breweries');
    ul.innerHTML = breweries.reduce((html, brewery) => {
      return html + `
        <li>
          <a href="#/breweries/${brewery.id}/beers">${brewery.name}</a>, ${brewery.city} ${brewery.state}
        </li>`;
    }, '');
  }
}
