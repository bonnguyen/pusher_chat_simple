/**
 * Created by nguyenbon on 11/17/15.
 */
var express = require('express');
var pusher = require('../controller/chatCtrl');
var router = express.Router();

// display the list of item
router.get('/', function(req, res){
  // don't let nameless people view the items, redirect them back to the homepage
  if (typeof req.session.username == 'undefined') {
    res.redirect('/');
  } else {
    res.render('chat', {username: req.session.username});
  }
});

/* Send message */
router.post('/add', function(req, res, next) {
  var username = req.body.username;
  var message = req.body.message;
  var date = new Date().getTime();
  var data = {
    "username" : username,
    "message": message,
    "date" : date
  };

  pusher.chat(data);
  res.send("oke");
});

router.get("/logout", function(req, res){
  // delete the session variable
  delete req.session.username;
  // redirect user to homepage
  res.redirect('/');
});


module.exports = router;
