const upload = document.querySelector("#upload");
const imageUpload = document.querySelector("#photo-upload");

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