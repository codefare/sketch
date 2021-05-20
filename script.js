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
for (i = 0; i < length; i++) {

container.addEventListener('mouseover', function(){});
    
// create element
    let block = document.createElement('div')
    block.style.height = `${divided}px`;
    block.style.width = `${divided}px`;
    block.style.backgroundColor = "white"; 
    container.append(block);

// mark mouse over (draw)    
block.addEventListener ('mouseover', function (e) {
    //get background color
    let color = e.clientX
    let color2 = e.clientY
    
    block.style.backgroundColor = `rgb(${color},${color2}, 85)`;
    let btn = document.querySelector('button');
    btn.addEventListener('click', reset);
    function reset() {
        block.style.backgroundColor ="white";
    }

        });
}
//reset function
}

