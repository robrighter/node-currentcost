import serial
import time
import sys

try:
  if len(sys.argv) == 2:
    # ser = serial.Serial(sys.argv[1], 57600)
    hour=1
    while 1:
      hour=hour+1
      print("<msg><src>CC128-v0.15</src><dsb>00001</dsb><time>"+str(hour)+":06:52</time><tmprF>79.3</tmprF><sensor>0</sensor><id>02143</id><type>1</type><ch1><watts>03275</watts></ch1><ch2><watts>00349</watts></ch2></msg>\n"),
      #print( ser.readline() ),
      sys.stdout.flush()
      time.sleep( 1 )
  else:
    sys.stderr.write('No Device Provided')
except:
    sys.stderr.write('Invalid CurrentCost Device')