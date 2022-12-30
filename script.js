const container = document.querySelector('#container');
const apply = document.querySelector('#apply');
const text = document.querySelector('.sizeValue');
const clear = document.querySelector('#clear');
let gridSize = document.querySelector('#size');
let colorSelect = document.querySelector('#colorChange');
let colorWarn = document.querySelector('.colorWarn');
let boxSize = 16;
let prevSize = 16;
let curColor = '#0096FF';
let newColor = '#0096FF';

createGrid(prevSize);

function createGrid(contSize){
    for (let i = 0; i < contSize*contSize; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        size = 512/contSize;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${prevSize}, auto)`;
}

function changeColor(event){
    event.target.style.backgroundColor = curColor;
}

clear.addEventListener('click', () => {
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    createGrid(prevSize);
})

apply.addEventListener('click', () =>{
    prevSize = boxSize;
    curColor = newColor;
    colorWarn.textContent = '';
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    createGrid(prevSize);
})

gridSize.addEventListener('input', (event) =>{
    boxSize = event.target.value;
    text.textContent = `Current size - ${boxSize}x${boxSize}`;
})

colorSelect.addEventListener('input', (event) =>{
    newColor = event.target.value;
    if (newColor !== curColor){
        colorWarn.textContent = 'Click "Apply" to change color';
    } else{
        colorWarn.textContent = '';
    }
})