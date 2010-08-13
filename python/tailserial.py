import serial
import time
import sys

try:
  if len(sys.argv) == 2:
    ser = serial.Serial(sys.argv[1], 57600)
    while 1:
      print( ser.readline() ),
      sys.stdout.flush()
  else:
    sys.stderr.write('No Device Provided')
except:
    sys.stderr.write('Invalid CurrentCost Device')