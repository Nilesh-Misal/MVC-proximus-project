'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
//var config    = require(__dirname + '/config.js')[env];
//var c=require('../config/config.js')
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

//this.db_config.debug = true

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  //console.log(sequelize);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
  //console.log(sequelize);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

  // var models = [                 
  //   'Customer',            
  // ];
  // models.forEach(function(model) {
  //   module.exports[model] = sequelize.import(__dirname + '/' + model);
  // });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
