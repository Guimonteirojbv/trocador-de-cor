var colors = ['red', 'white', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'gray'];
var colorSpan = document.getElementById('color');
var btnChange = document.getElementById('cliqueme');
function changeColor() {
    var num = Math.floor(Math.random() * colors.length);
    if (colorSpan) {
        var cor = colors[num];
        colorSpan.innerText = cor;
        colorSpan.style.color = cor;
        document.body.style.backgroundColor = cor;
    }
    return;
}
changeColor();
btnChange === null || btnChange === void 0 ? void 0 : btnChange.addEventListener('pointerdown', changeColor);
