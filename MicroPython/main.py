"""
Created by: Ihor Chernyshev
Created on: Sep 2023
This module turns an LED on a breadboard on and off.
"""

# setup
from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:

    # light on
    if button_a.is_pressed():
        pin16.write_digital(1)
        display.show(Image.YES)

    #light off
    if button_b.is_pressed():
        pin16.write_digital(0)
        display.show(Image.NO)
