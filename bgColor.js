const bgColor = document.querySelector("#backgroung-color");
const colorPicker = document.querySelector("#bgcolor-picker");
bgColor.addEventListener("click", function(){
    colorPicker.click();
});

colorPicker.addEventListener("change", function(e){
    color = colorPicker.value;
    bgColorReDraw(color);
    drawPoints();
});

function bgColorReDraw(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}