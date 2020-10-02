// Array of color
var colors = generateRandomColors(6);
var noSquares = 6;

// variables
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn")


//working of easy btn
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    noSquares = 3;
    colors = generateRandomColors(noSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.background = colors[i];
        }else{
            square[i].style.display = "none";
        }
    }
});

//working of hard btn
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    noSquares = 6;
    colors = generateRandomColors(noSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<square.length;i++){
        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }

})

resetButton.addEventListener("click",function(){
    //generate all new color
    colors = generateRandomColors(noSquares);
    //picked up random color from arr
    pickedColor = pickColor();
    //change colordisplay to amtch picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDispaly.textContent = "";
    //change color square
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelBlue"
});

//add color code in h1
colorDisplay.textContent = pickedColor;

//coloring square
for(var i=0; i<square.length; i++){
    square[i].style.backgroundColor = colors[i]

    //add click listner to squares
    square[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color with clicked color
        if(clickedColor === pickedColor){
            messageDispaly.textContent = "Correct!";
            //change button form change color to play again after winning
            resetButton.textContent = "Play again?"
            changeColor(clickedColor)
            h1.style.backgroundColor = clickedColor;

        }else{
            this.style.background = "#232323"
            messageDispaly.textContent = "Try again";
        }
    });
}


//change color of all squares if picked correct color
function changeColor(color){
    //loop through all color
    for(var i=0; i<square.length; i++){
        square[i].style.backgroundColor = color;
    }
}

//get random color to check
function pickColor(){
    //floor conver float to int 
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //take an array
    var arr = [];
    //add num random colors in array
    for(var i=0;i<num;i++){
        //get random color and push to arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

//get random color
function randomColor(){
    //pick a red from 0-255
    var red = Math.floor(Math.random()*255);
    //pick a green from 0-255
    var green = Math.floor(Math.random()*255);
    //pick a blue from 0-255
    var blue = Math.floor(Math.random()*255);
    return "rgb("+red+", "+green+", "+blue+")";
}