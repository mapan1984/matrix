function random(begin, end) {
    let range = Math.abs(begin - end)
    return begin + Math.floor(range * Math.random())
}

function probability(t, a) {
    let r = random(1, a+1)
    return r <= t
}

log = console.log.bind(console)
