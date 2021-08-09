function createSticky(ele){

    let sticky = document.createElement("div");
    sticky.classList.add("sticky");

    let stickyHeader = document.createElement("div");
    stickyHeader.classList.add("sticky-header");

    let minimise = document.createElement("div");
    minimise.classList.add("minimise");

    let close = document.createElement("div");
    close.classList.add("close");

    let stickyContent = document.createElement("div");
    stickyContent.classList.add("sticky-content");

   
    stickyHeader.appendChild(minimise);
    stickyHeader.appendChild(close);
    sticky.appendChild(stickyHeader);
    sticky.appendChild(stickyContent);

    document.body.appendChild(sticky);

    minimise.addEventListener("click", function(){
        ele.style.display = ele.style.display == "none" ? "block" : "none" ;
    });

    close.addEventListener("click", function(){
        // document.body.removeChild(sticky); --yeh peche se remove krta hai
        // yeh aage se remove krte hai
        sticky.remove();
    });

    let initailX;
    let initialY;
    let isStickyHold = false;
    
    stickyHeader.addEventListener("mousedown", function(e){
        isStickyHold = true;
        initailX = e.clientX;
        initialY = e.clientY;
    });

    stickyHeader.addEventListener("mousemove", function(e){
        if(isStickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
            let dy = finalY - initialY;
            let dx = finalX - initailX;

            let {top, left} = sticky.getBoundingClientRect();
            if(top+dy>0 && top + dy < window.innerHeight && left + dx > 0 && left + dx < window.innerWidth){
                sticky.style.top = top + dy + "px";
                sticky.style.left = left + dx + "px";
            }


            initailX = finalX;
            initialY = finalY;
            
        }
    });

    stickyHeader.addEventListener("mouseup", function(e){
        isStickyHold = false;
    });


    return stickyContent;
}