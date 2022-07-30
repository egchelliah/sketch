
function makeDiv(){
    let size = document.getElementById('range').value
    console.log('The value I got from the slider was ' + size)
    square = size*size
    console.log('The value of the square I got was ' + square )

    for(i=0;i<square;i++){
        div = document.createElement("div");
        div.id='box'
        document.getElementById('container').appendChild(div);
        console.log('Making div number: ' + i)
    }

    console.log(document.getElementById('container').style)

}

makeDiv();
