console.log("headscript")
console.log(document.hasFocus())
function tick() {
    document.body.style.background = document.hasFocus() ? "white" : "black"
}

setInterval(tick, 1000/60)