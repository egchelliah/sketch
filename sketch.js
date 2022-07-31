
function changeRange(){
    removeBoxes();
    makeDiv();
}

// This function removes the existing divs
function removeBoxes(){
    let boxes = document.querySelectorAll('#box');
    console.log('Remove function ran');
    boxes.forEach(e => e.remove())
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
        document.getElementById('container').appendChild(div);
    }

    document.querySelector('#container').style.gridTemplateColumns=`repeat(${size},2fr)`
    console.log(document.querySelector('#container').style.gridTemplateColumns)
    document.querySelector('#container').style.gridTemplateRows=`repeat(${size},2fr)`


 }

makeDiv();
