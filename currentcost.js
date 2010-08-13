(function(){
  var events = require('events'),
      spawn = require("child_process").spawn,
      xml = require('./lib/xml2json'),
      device = '';
  var CurrentCost = exports.CurrentCost = function(dev){device = dev};
  CurrentCost.prototype = new events.EventEmitter();
  CurrentCost.prototype.begin = function(){
    var that = this;
    var dataprocess = spawn("python", ["./python/tailserial.py", device]);
    dataprocess.stdout.on('data', function (data) {
      try{
        var tosend = formatData(xml.parse(new String(data), "", false));
        if(tosend)
          that.emit(( tosend.hasOwnProperty('hist')? 'history' : 'incremental' ), tosend);
      }
      catch(err){
        that.emit('error', data+"");
      }
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