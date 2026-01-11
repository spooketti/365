//the scheduler that keeps it all together
let fps = 60
const tick365 = new Event('tick365');
window.setInterval(function (e) {
    document.dispatchEvent(tick365)
}, (1000 / fps))
