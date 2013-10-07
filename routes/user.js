
/*
 * GET users listing.
 */
var User = require('../models/user');

exports.get = function(req, res){
  if (req.params.id) {
    User.findById(req.params.id, function (error, user) {
      if (error) {
        throw error;
      } else {
          res.render('detail', { user: user });
      }
    });
  } else {
    User
      .find()
      /* .exec() es otra forma de utilizar
       * los callbacks luego de una query
       * http://mongoosejs.com/docs/api.html#query_Query-exec
       */
      .exec(function (error, users) {
        if (error) {
          throw error;
        } else {
          res.render('list', { users: users });
        }
      });
  }
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
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.save();
  }

  res.redirect('/users/' + user.id);
};
