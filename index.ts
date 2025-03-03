const colors = ['red', 'white', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'gray'];
const colorSpan = document.getElementById('color');
const btnChange = document.getElementById('cliqueme');


function changeColor() {
    let num = Math.floor(Math.random() * colors.length);
    if(colorSpan) {
        const cor = colors[num];
        colorSpan.innerText = cor;
        colorSpan.style.color = cor;
        document.body.style.backgroundColor = cor
    }

    return
}

changeColor();

btnChange?.addEventListener('pointerdown', changeColor)