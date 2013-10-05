
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
var User = require('../models/user');

exports.get = function(req, res){
  User.find(req.params.id, function (error, res) {
    if (error) {
      throw error;
    } else {
      if (!res.length) {
        res.render('detail', { user: res});  
      } else {
        res.render('list', {users: res})
      }
    }
  });
};

exports.form = function (req, res) {
  res.render('form');
};

exports.post = function (req, res) {
  if(req.body.id) {
    // update
    users[req.body.id] = req.body;
  } else {
    // insert
    //users.push(req.body);
    User.save({name: req.body.name, email: req.body.email})
  }
  res.redirect('/users/'+(users.length-1));
}