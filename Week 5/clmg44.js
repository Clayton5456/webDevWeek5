var state=0;


function switchy1(){
    document.getElementById("youtube").src="https://www.youtube.com/embed/mACKHGfdLlo?autoplay=1";
    
}


function switchy2(){
    document.getElementById("youtube").src="https://www.youtube.com/embed/tqsy9Wtr1qE?autoplay=1";
}

function switchy3(){
    document.getElementById("youtube").src="https://www.youtube.com/embed/2RPjK6EwfCI?autoplay=1"
}
function switchy4(){
    document.getElementById("youtube").src="https://www.youtube.com/embed/xuCn8ux2gbs?autoplay=1"
}

function switchv1(){
    document.getElementById("playn").src="./videos/FinishedShape.mp4";
    document.getElementById("source").type="video/mp4";
    document.getElementById("control").innerHTML="Play";
    state=0;


}

function switchv2(){
    document.getElementById("playn").src="./videos/maskLiner.mp4";
    document.getElementById("control").innerHTML="Play";
    state=0;
    
    

}

function switchv3(){
    document.getElementById("playn").src="./videos/PartAFinishedShape.mp4";
    document.getElementById("control").innerHTML="Play";
    state=0;
    

}
const video = new Map();

video.set("Big",1000);
video.set("Normal",500);
video.set("Small",100);

function size1(){
    document.getElementById("playn").width=video.get("Small");
    
}

function size2(){
    document.getElementById("playn").width=video.get("Normal");
    

}

function size3(){
    document.getElementById("playn").width=video.get("Big");
    

}

function controls(){
    
    if(state==0){
        document.getElementById("playn").play();
        document.getElementById("control").innerHTML="Pause";
        state=1;
        
    }
    else if(state==1){
        document.getElementById("playn").pause();
        document.getElementById("control").innerHTML="Play";
        state=0;
    }
    else{
        alert("Something went wrong!");
    }
}


