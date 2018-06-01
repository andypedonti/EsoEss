const db = require("../models");

module.exports = function(app) {

    app.post("/api/case", function(req, res) {
        // console.log(req.body)
        db.Case.create({
            disaster_type: req.body.disaster_type,
            location_type: req.body.locationType,
            geolocation: req.body.currentLocation,
            items_needed: JSON.stringify(req.body.items_needed),
            quantity_affected: req.body.quantity_affected,
            demographic: JSON.stringify(req.body.demographic)
        })
        .then(function(dbCase) {
            res.json(dbCase);
        });
    })

    app.get("/api/helpcenter",(req, res)=>{
        db.Case.findAll({})
        .then(function(dbCase){
            console.log(dbCase);
            res.json(dbCase);
        });
      });
}