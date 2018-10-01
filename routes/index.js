var models  = require('../model');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Customer.findAll({
    include: [ models.language ]
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});


module.exports = router;
