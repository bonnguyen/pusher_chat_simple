var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // if user is not logged in, ask them to login
  if (typeof req.session.username == 'undefined') {
    res.render('index');
  }
  // if user is logged in already, take them straight to the items list
  else {
    res.redirect('/chat');
  }
});

/* Send message */
router.post('/', function(req, res, next) {
  // if the username is not submitted, give it a default of "Anonymous"
  var username = req.body.username;
  // store the username as a session variable
  req.session.username = username;
  // redirect the user to homepage
  res.redirect('/');
});

module.exports = router;
