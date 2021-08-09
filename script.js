const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// pointsDb - storing the points
let pointsDB = [];
let points = [];

// redo points DB
let redoPointsDB = [];

// bgcolor
let color="white";


// object destructuring
let {top:topOffSet} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - topOffSet;
canvas.width = window.innerWidth;

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight - topOffSet;
    canvas.width = window.innerWidth;
    // bgColorReDraw(color);
    drawPoints();

});

let isPenDown = false;
canvas.addEventListener("mousedown",function(e){
    if(redoPointsDB.length>0){
        redoPointsDB = [];
    }
    points = [];
    isPenDown = true;
    let x = e.clientX;
    let y = e.clientY-topOffSet;
    ctx.beginPath();
    ctx.moveTo(x,y);
    let point = {
        'id': 'md',
        'x' : x,
        'y' : y,
        strokeStyle : ctx.strokeStyle,
        lineWidth : ctx.lineWidth,
    };

    points.push(point);

});

canvas.addEventListener("mousemove",function(e){
     if(isPenDown){
        let x = e.clientX;
        let y = e.clientY-topOffSet;
        ctx.lineTo(x,y);
        let point = {
            'id': 'mv',
            'x' : x,
            'y' : y,
            strokeStyle : ctx.strokeStyle,
            lineWidth : ctx.lineWidth,
        };
        points.push(point);
        ctx.stroke();
     }
});

canvas.addEventListener("mouseup",function(e){
    isPenDown = false;
    pointsDB.push(points);

console.log(pointsDB);
console.log(redoPointsDB);
});


