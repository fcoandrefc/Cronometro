let numero = 0
let índice = 0
input.onButtonPressed(Button.A, function () {
    numero = 0
    for (let numero = 0; numero <= 10; numero++) {
        basic.showNumber(numero)
    }
})
input.onButtonPressed(Button.B, function () {
    numero = 0
    índice = 10
    for (let numero = 0; numero <= 10; numero++) {
        basic.showNumber(índice)
        índice += -1
    }
})
