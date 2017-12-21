class Char {

    // static size = 20

    constructor(x, y, speed, first) {
        this.x = x
        this.y = y
        this.speed = speed
        this.first = first
        this.symbol = null
    }

    setToRandomSymbol() {
        if (probability(4, 5)) {
            // set it to Katakana
            this.symbol = String.fromCharCode(
                0x30A0 + random(0, 96)
            )
        } else {
            // set it to numeric
            this.symbol = random(0, 9)
        }
    }

    updateSymbol() {
        if (probability(2, 15)) {
            this.setToRandomSymbol()
        }
    }

    update() {
        if (this.y >= 600) {
            this.y = random(-10, 0)
        } else {
            this.y += this.speed
        }
        this.updateSymbol()
    }

    render(context) {
        if (this.first) {
            context.strokeText(this.symbol, this.x, this.y)
        } else {
            context.fillText(this.symbol, this.x, this.y)
        }
    }
}

Char.size = 5
