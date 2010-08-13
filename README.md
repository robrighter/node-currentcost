Currentcost Driver for Node.js
==============================

node-currentcost provides an easy way to pull data from current cost home energy devices. For more information about CurrentCost devices go to: http://www.currentcost.com

This driver currently depends on a python serial library in order to provide compatibility across multiple flavors of Unix (Linux, OSX, BSD)

API
===

The api is very simple. It consists of a single EventEmitter that can notify of 2 types of events:

Incremental Events ('incremental')
=================================
These notifications come roughly once every 3 seconds. The data for incremental updates looks like this:

		{ src: 'CC128-v0.15'
		, dsb: 2
		, time: '10:02:03'
		, tmprf: 77.2
		, sensor: 0
		, id: 1123
		, type: 1
		, ch1: { watts: 447 }
		, ch2: { watts: 384 }
		}


History Events ('history')
=================================
These notifications come 1 minute past every odd hour that contains details of historical energy usage. The data for incremental updates looks like this:

		{ src: 'CC128-v0.15'
		, dsb: 2
		, time: '10:02:03'
		, hist: 
		   { dsw: 26
		   , type: 1
		   , units: 'kwhr'
		   , data: [ { sensor: 0
			    , h024: 1.1
			    , h022: 0.9
			    , h020: 0.3
			    , h018: 0.4
			    }
			    , { sensor: 1
			    , units: 'kwhr'
			    , h024: 0
			    , h022: 0
			    , h020: 0
			    , h018: 0
			    }
			  ]
		   }
		}

For more information about the Currentcost data schema see the products data specification (http://www.currentcost.com/cc128/xml.htm). All information in this driver is provided in JSON format, but the Currentcost data spec refers to the schema in its xml form:
http://www.currentcost.com/cc128/xml.htm