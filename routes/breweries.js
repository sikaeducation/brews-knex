const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/", function(request, response, next) {
    queries.getBreweries()
    .then(function(breweries){
        response.json(breweries);
    });
});

router.get("/:id", function(request, response, next) {
    queries.getBrewery(request.params.id)
    .then(function(brewery){
        response.json(brewery);
    });
});

router.get("/:id/beers", function(request, response, next) {
    queries.getBeersByBrewery(request.params.id)
    .then(function(beers){
        response.json(beers);
    });
});

module.exports = router;
