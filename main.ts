input.onButtonPressed(Button.A, function () {
    basic.showNumber(COUNT)
    COUNT += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(COUNT)
    while (COUNT > 0) {
        COUNT += -1
        basic.showNumber(COUNT)
    }
})
input.onButtonPressed(Button.B, function () {
    COUNT += 10
    basic.showNumber(COUNT)
})
let COUNT = 0
COUNT = 0
let X = 0
basic.forever(function () {
	
})
