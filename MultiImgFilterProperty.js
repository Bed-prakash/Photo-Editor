var allImg=document.images;
function allImgTags(){
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].src=  `./Assets/${i}.jpg`;
        allImg[i].style.width="200px";
        allImg[i].style.height="180px";
        allImg[i].addEventListener("click", function(){
        document.getElementById("bigImage").style.display="flex";
        })
    }
}
allImgTags();

var globalSRC;
function passSrc(urlOfImag){
    document.getElementById("bigimg").style.backgroundImage=`url(${urlOfImag})`;
    globalSRC=urlOfImag;
}

//close window
function closewindow(){
    document.getElementById("bigImage").style.display=`none`;
    document.getElementById("gallaryImageEdit").style.display=`none`;
}

// image window open
function openEditWindow(){
    document.getElementById("image").style.backgroundImage=`url(${globalSRC})`;
    document.getElementById("gallaryImageEdit").style.display=`flex`;
}
//image edit code
function imageEdit(){
    var blure=document.getElementById("blure").value;
    var brightness=document.getElementById("brightness").value;
    var contrast=document.getElementById("contrast").value;
    var grayscale=document.getElementById("grayscale").value;
    var hue=document.getElementById("hue").value;
    var invert=document.getElementById("invert").value;
    var opecity=document.getElementById("opecity").value;
    var saturate=document.getElementById("saturate").value;
    var sepia=document.getElementById("sepia").value;

    document.getElementById("image").style.filter=`blur(${blure}px) contrast(${contrast}%) brightness(${brightness}%) sepia(${sepia}%)  hue-rotate(${hue}deg) invert(${invert}%) saturate(${saturate}%) opacity(${opecity}%) grayscale(${grayscale}%)`;

    var rotatex=document.getElementById("rotatex").value;
    var rotatey=document.getElementById("rotatey").value;
    var scalex=document.getElementById("scalex").value;
    var scaley=document.getElementById("scaley").value;
    var skewx=document.getElementById("skewx").value;
    var skewy=document.getElementById("skewy").value;
    var translatex=document.getElementById("translatex").value;
    var translatey=document.getElementById("translatey").value;
    // console.log(rotatex,rotatey,rotatez,scalex,scaley,skewx,skewy,translatex,translatey);
    
    document.getElementById("image").style.transform=`rotateX(${rotatex}deg) rotateY(${rotatey}deg) scaleX(${scalex}) scaleY(${scaley}) skewX(${skewx}deg) skewY(${skewy}deg) translateX(${translatex}px) translateY(${translatey}px)`
}




