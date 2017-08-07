var db = require('../db');

module.exports = {

  Togos: {
    get: function (req, res) {
      db.Togos.findAll()
        .then(function(Togos) {
          res.send(Togos);
        });
    },

    post : function (req, res) {
      db.Togos.create({
        location: req.body.location,
        country: req.body.country
      }).then(function(message) {
        console.log(message);
        db.Togos.findAll()
          .then(function(Togos){
            res.send(Togos);
          });
      });
    }


  }
};
