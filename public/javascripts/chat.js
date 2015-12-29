/**
 * Created by nguyenbon on 12/1/15.
 */
function postMessage(){
  var message = document.querySelector('#message').value;
  var username = $('#username').text();
  var data = {
    'username' : username,
    'message' : message
  }
  $.post('https://pusherchatsimple.herokuapp.com/chat/add/', data, function(responseText){
    document.querySelector('#message').value = '';
    console.log('Send ok');
  });
}
