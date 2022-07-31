// Setup variables

const slider = document.getElementById('range')
let size = slider.value
const gridSize = document.getElementById('gridsize')
const boxes = document.querySelectorAll('.boxclass')
const clearButton = document.querySelector('#clearbutton');
const applyButton = document.querySelector('#apply');

// Listen for button clicks

slider.addEventListener("input", (event) =>{
    updateGrid();
    applyButton.disabled=false;
} )

applyButton.addEventListener('click', (event) =>{
    changeRange();
})


clearButton.addEventListener('click', (event) => {
    hoverClear();
})


// Do a bunch of things when your apply your grid size
function changeRange(){
    removeBoxes();
    makeDiv();
    hoverClear();
    hover();
    applyButton.disabled=true
}

// This function adds the background color for hover

function hover(){
    let boxes = document.querySelectorAll('.boxclass')

    boxes.forEach(e => e.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = 'black'
    }))
}

// Clear out the background color of the grid

function hoverClear(){
    let boxes = document.querySelectorAll('.boxclass')

    boxes.forEach(e => {
        e.style.backgroundColor='transparent'
    })
}


// This function removes the existing divs

function removeBoxes(){
    let boxes = document.querySelectorAll('#box');
    console.log('Remove function ran');
    boxes.forEach(e => e.remove())
}

// This function updates the grid value text

function updateGrid(){
    let size = document.getElementById('range').value
    let gridSize = document.getElementById('gridsize')
    gridSize.textContent=String(size + ' X ' + size)
}

// This function adds the correct number of divs to fill out the square

function makeDiv(){
    let size = document.getElementById('range').value
    let gridSize = document.getElementById('gridsize')
    gridSize.textContent=String(size + ' X ' + size)
    console.log('The value I got from the slider was ' + size)
    square = size*size
    console.log('The value of the square I got was ' + square )

    
    for(i=0;i<square;i++){
        div = document.createElement("div");
        div.id='box'
        div.className='boxclass'
        document.getElementById('container').appendChild(div);
    }

    document.querySelector('#container').style.gridTemplateColumns=`repeat(${size},2fr)`
    document.querySelector('#container').style.gridTemplateRows=`repeat(${size},2fr)`


 }

 window.onload = () => {
    makeDiv();
    hover();
    applyButton.disabled=true;
 }
