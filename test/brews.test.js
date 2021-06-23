'use strict'

const fs = require('fs');
const expect = require('chai').expect;
const queries = require('../queries');
const app = require('../app');
const request = require('supertest');
const fixtures = require('./fixtures');

const byID = (a, b) => a.id - b.id;

describe('Project', () => {
  it('should have a migrations directory', () => {
     const hasMigrations = fs.existsSync('migrations');
     expect(hasMigrations).to.equal(true);
  });

  xit('should have a seeds directory', () => {
     const hasSeeds = fs.existsSync('seeds');
     expect(hasSeeds).to.equal(true);
  });
});

describe('Breweries', () => {
  xit('can get all breweries', (done) => {
    request(app)
      .get('/breweries')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.sort(byID)).to.deep.equal(fixtures.breweries.sort(byID));
        done();
      })
  })
  xit('can get a brewery by id', (done) => {
    request(app)
      .get('/breweries/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.breweries[0]);
        done();
      })
  })

  xit('can get a brewery by id', (done) => {
    request(app)
      .get('/breweries/2')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.breweries[1]);
        done();
      })
  })

  xit('can get beers for a brewery by id', (done) => {
    request(app)
      .get('/breweries/1/beers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.sort(byID)).to.deep.equal(fixtures.beersByBrewery[1].sort(byID));
        done();
      })
  })

  xit('can get beers for a brewery by id', (done) => {
    request(app)
      .get('/breweries/2/beers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.sort(byID)).to.deep.equal(fixtures.beersByBrewery[2].sort(byID));
        done();
      })
  })
});


describe('Beers', () => {
  xit('can get all beers', (done) => {
    request(app)
      .get('/beers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.sort(byID)).to.deep.equal(fixtures.beers.sort(byID));
        done();
      })
  })
})
