// set global variables
let container = document.querySelector('.container');
let choice = document.querySelector('select');

choice.onchange = function (e) {
    
    //reset the grid
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

//connect choices
let square = (choice.value);

//calculate px for div
let squared = Math.sqrt(square);
let divided = 100 / squared;

// add block
let length = (1000 / divided)*(1000 / divided);
let count = 0;
for (i = 0; i < length; i++) {
    // create element
    count += 1
    let block = document.createElement('div')
    block.style.height = `${divided}px`;
    block.style.width = `${divided}px`;
    block.style.backgroundColor = "green"; 
    container.append(block);
    block.addEventListener ('mouseover', function () {
    block.style.backgroundColor = "black";
    let btn = document.querySelector('button');
    btn.addEventListener('click', reset);
    function reset() {
        block.style.backgroundColor ="green";
    }

    });
}
//reset function
}

