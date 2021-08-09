const upload = document.querySelector("#upload");
const imageUpload = document.querySelector("#photo-upload");
const download = document.querySelector("#download");


upload.addEventListener("click", function(){
    imageUpload.click();
});

imageUpload.addEventListener("change", function(e){
    let fileObject = imageUpload.files[0];
    let filePath = URL.createObjectURL(fileObject);

    let img  = document.createElement("img");
    img.setAttribute("src", filePath);
    img.classList.add("photo");

    // document.body.appendChild(img);
    let stickyContent = createSticky(img);
    stickyContent.appendChild(img);
});

download.addEventListener("click", function(){
    let aTAg = document.createElement('a');
    let filePath = canvas.toDataURL("image/png");
    aTAg.setAttribute("download","canvas.png");
    aTAg.setAttribute("href", filePath)
    aTAg.click();
    aTAg.remove();
});