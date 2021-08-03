const undo = document.querySelector('#undo');
const redo = document.querySelector('#redo');

undo.addEventListener('click', function(){
    let latestLine = pointsDB.pop();
    redoPointsDB.push(latestLine);
    clearCanvas();
    drawPoints();
});

redo.addEventListener('click', function(){
    if(redoPointsDB.length>0){
        let line = redoPointsDB.pop()
        pointsDB.push(line);
        for(let j=0;j<line.length;j++){
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

