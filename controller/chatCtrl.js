/**
 * Created by nguyenbon on 11/17/15.
 */
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '154568',
  key: 'a23a160d93f93ade6019',
  secret: '7857a95732d50b496152',
  encrypted: true
});
pusher.port = 443;

exports.chat = function (data) {
  pusher.trigger('test_channel', 'my_event', data);
}
