var Sequelize = require('sequelize');
var db = new Sequelize('togoList', 'root', '');

var Togos = db.define('Togos', {
  location: Sequelize.STRING,
  country: Sequelize.STRING
});

Togos.sync();

exports.Togos = Togos;