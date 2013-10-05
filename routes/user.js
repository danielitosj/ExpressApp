
/*
 * GET users listing.
 */

var users = [];

exports.get = function(req, res){
  if(req.params.id) {
    // detail
    res.render('detail', {user: users[req.params.id]});
  } else {
    // list
    res.render('list', {users: users});
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
    users.push(req.body);
  }
  res.redirect('/users/'+users.length);
}