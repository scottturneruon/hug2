basic.showString("Hug avoider 2")
basic.forever(function () {
    if (eggbit.sonar(ebPingUnit.Centimeters) > 30) {
        eggbit.setExpression(EBExpression.Smile)
        eggbit.ledRainbow()
    } else {
        eggbit.setLedColor(0xFF0000)
        music.playMelody("B A G A G F A C5 ", 240)
        eggbit.setExpression(EBExpression.Surprise)
    }
})
