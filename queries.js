var databaseConnection = require("./data/database_connection");

module.exports = {
    getBreweries: function(){
        return databaseConnection("brewery").select();
    },
    
    getBrewery: function(id){
        return databaseConnection("brewery")
        .first()
        .where("id", id);
    },

    getBeers: function(){
        return databaseConnection("beer")
        .select("beer.name AS beer_name", "brewery.name AS brewery_name", "*")
        .innerJoin("brewery", "brewery_id", "brewery.id").orderBy("brewery.name", "beer.name")
    },

    getBeersByBrewery: function(brewery_id){
        return databaseConnection("beer")
        .select("beer.name AS beer_name", "brewery.name AS brewery_name",  "beer.id", "brewery.name", "abv", "brewery_id", "city", "state", )
        .innerJoin("brewery", "brewery_id", "brewery.id")
        .where("brewery_id", brewery_id)
        .orderBy("brewery.name", "beer.name")
    }
};
