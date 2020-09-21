wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S0,
wuKong.ServoList.S4
)
let speed = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        speed = 35
    }
    if (input.buttonIsPressed(Button.B)) {
        speed = 0
    }
    wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, speed)
    wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, speed)
    wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, speed)
    wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, speed)
    basic.showNumber(speed)
})
