class Stream {

    constructor(x) {
        this.x = x
        this.chars = [];
        this.totalChars = random(10, 35);
        this.speed = random(1, 5);
        this.charSize = Char.size

        this.generateChars()
    }

    generateChars() {
        let first = true
        let y = random(-10, 0)
        for (let i = 0; i < this.totalChars; i++) {
            let char = new Char(this.x, random(-100, 0), this.speed, first)
            char.setToRandomSymbol()
            this.chars.push(char)
            y -= this.charSize
            first = false
        }
    }

    update() {
        for (let char of this.chars) {
            char.update()
        }
    }

    render(context) {
        for (let char of this.chars) {
            char.render(context)
        }
    }
}
