(function(){
  events = require('events');  
  var spawn = require("child_process").spawn;
  var xml = require('./lib/xml2json');
  var device = '';
  var CurrentCost = exports.CurrentCost = function(dev){device = dev};
  CurrentCost.prototype = new events.EventEmitter();
  CurrentCost.prototype.begin = function(){
    var that = this;
    var dataprocess = spawn("python", ["./python/tailserial.py", device]);
    dataprocess.stdout.on('data', function (data) {
      that.emit('data', formatData(xml.parse(new String(data), "", false)));
    });
    dataprocess.stderr.on('data', function (data) {
      that.emit('error', data+"");
    });  
  };
  function formatData(data){
    if(data.hasOwnProperty('msg')){
      return data['msg'];
    }
  }
})();