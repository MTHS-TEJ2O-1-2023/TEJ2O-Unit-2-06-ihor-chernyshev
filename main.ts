/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Cherntshev
 * Created on: Sep 2023
 * This program turns an LED on a breadboard on and off.
*/

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.No)
  pins.digitalWritePin(DigitalPin.P16, 0)
})