const pencil  = document.querySelector("#pencil");
const eraser  = document.querySelector("#eraser");
const undo = document.querySelector('#undo');
const redo = document.querySelector('#redo');

let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");
let penColors = document.querySelectorAll(".pencil-colors div");
let pencilSize = document.querySelector("#pencilSize");
let eraserSize = document.querySelector("#eraserSize");
let pencilColorSelected = document.querySelector("#pencil-color-selected");

// ctx.lineWidth = 2;

let activeTool = 'pencil';
let pencilWidth = 1;
let eraserWidth = 1;

pencilSize.addEventListener('change', function(e){
    console.log("pencil size");
    // console.log();
  
    pencilWidth = pencilSize.value;
    ctx.lineWidth = pencilWidth;
    //   e.stopPropagation();
});

eraserSize.addEventListener('change', function(e){
    eraserWidth = eraserSize.value;
    ctx.lineWidth = eraserWidth;
});

for(let i = 0; i<penColors.length; i++){
    penColors[i].addEventListener("click", function(){
        if(penColors[i].classList.contains('red')){
            ctx.strokeStyle = "red";
        }else if(penColors[i].classList.contains('blue')){
            ctx.strokeStyle = "blue";
        }else if(penColors[i].classList.contains('green')){
            ctx.strokeStyle = "green";
        }else{
            ctx.strokeStyle = "black";
        }
    });
}

// pencilColorSelected.addEventListener("change", function(){
//     console.log("pencil color");
//     let colorSelected = pencilColorSelected.value;
//     ctx.strokeStyle = colorSelected;
// });

pencil.addEventListener('click', function(){
    console.log("pencil");
    if(!pencil.classList.contains('active-tool')){
        eraser.classList.remove('active-tool');
        eraserOptions.classList.add('hide');
        pencil.classList.add('active-tool');
        ctx.strokeStyle = 'black';
        ctx.lineWidth = pencilWidth;
    }else{
        // already selected hai
        if(pencilOptions.classList.contains('hide')){
            pencilOptions.classList.remove('hide');
        }else{
            pencilOptions.classList.add('hide');
        }
    }

});

eraser.addEventListener('click', function(){
    console.log("eraser");
    if(!eraser.classList.contains('active-tool')){
        pencil.classList.remove('active-tool');
        pencilOptions.classList.add('hide');
        eraser.classList.add('active-tool');
        ctx.strokeStyle = 'white';
        ctx.lineWidth = eraserWidth;
    }else{
        // already selected hai
        if(eraserOptions.classList.contains('hide')){
            eraserOptions.classList.remove('hide');
        }else{
            eraserOptions.classList.add('hide');
        }
        
    }

});

undo.addEventListener('click', function(){
    let latestLine = pointsDB.pop();
    redoPointsDB.push(latestLine);
    clearCanvas();
    // bgColorReDraw(color);
    drawPoints();
});

redo.addEventListener('click', function(){
    if(redoPointsDB.length>0){
        let line = redoPointsDB.pop()
        pointsDB.push(line);
        for(let j=0;j<line.length;j++){
            ctx.strokeStyle = line[j].strokeStyle;
            ctx.lineWidth = line[j].lineWidth;
            if(line[j]['id'] === 'md'){
                ctx.beginPath();
                ctx.moveTo(line[j]['x'],line[j]['y']);
            }else{
                ctx.lineTo(line[j]['x'],line[j]['y']);
                ctx.stroke();
            }      
        }
    }
    

})

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function drawPoints(){
    for(let i = 0;i<pointsDB.length;i++){
        let line = pointsDB[i];
        for(let j=0;j<line.length;j++){
            ctx.strokeStyle = line[j].strokeStyle;
            ctx.lineWidth = line[j].lineWidth;
            if(line[j]['id'] === 'md'){
                ctx.beginPath();
                ctx.moveTo(line[j]['x'],line[j]['y']);
            }else{
                ctx.lineTo(line[j]['x'],line[j]['y']);
                ctx.stroke();
            }      
        }
    }
}

