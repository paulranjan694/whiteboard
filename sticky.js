const sticky = document.querySelector("#sticky");

sticky.addEventListener("click", function(){
   
   

    let textBox = document.createElement("textarea");
    textBox.setAttribute("class","sticky-box");
    textBox.setAttribute("rows","10");
    textBox.setAttribute("cols","30");

    let stickyContent = createSticky(textBox);

    stickyContent.appendChild(textBox);
});