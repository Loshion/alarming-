input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.onReceivedString(function (receivedString) {
    let receivedstring = ""
    if (receivedstring == "lights off") {
        basic.clearScreen()
    } else if (receivedstring == "lights on") {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Chessboard)
            basic.clearScreen()
            basic.showIcon(IconNames.SmallDiamond)
        }
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
radio.setGroup(5)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendString("lights on")
    } else {
        radio.sendString("lights off")
    }
    basic.pause(1000)
})
