CurrentCost = require('./currentcost').CurrentCost;
sys = require('sys');

var tryit = new CurrentCost('/dev/tty.usbserial');

tryit.on('data', function(data){
  console.log(sys.inspect(data));
});

tryit.on('error', function(data){
  console.log('ERROR: ' + data);
});

tryit.begin();