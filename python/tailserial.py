import serial
ser = serial.Serial('/dev/tty.usbserial', 57600)
while 1:
  print( ser.readline() ),
