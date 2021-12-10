var photos=["images/slide_img1.png","images/slide_img2.png","images/slide_img3.jpg","images/slide_img4.jpg","images/slide_img5.jpg"]
var imgTag=document.querySelector("#slide_img");

var count=0;

setTimeout(auto_slider, 2500);

function auto_slider(){
    count++;
    if(count>=photos.length){
        count=0;
    }
    imgTag.src=photos[count];
    setTimeout(auto_slider, 2500);
}

function next(){
    count++;
    if(count>=photos.length){
        count=0;
    }
    imgTag.src=photos[count];
}

function prev(){
    count--;   
    if(count<0){
        count=photos.length-1;
    }
    imgTag.src=photos[count];
}