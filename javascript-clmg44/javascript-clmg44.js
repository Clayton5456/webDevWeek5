var f=1;
var result;
//Pineapple=1
//Orange=2
//Apple=3
//Pear=4

function changeFruit(){
    if(f==1){
        document.getElementById("fruit").src="./fruit/pineapple-g0b83a3b6c_640.png";
    }
    else if(f==2){
        document.getElementById("fruit").src="./fruit/orange-g37e0fbbbb_640.png";
        //document.getElementById("fruit").src="fruit\orange-g37e0fbbbb_640.png";
    }
    else if(f==3){
        document.getElementById("fruit").src="./fruit/apple-g56a141b7e_640.png";
    }
    else if(f==4){
        document.getElementById("fruit").src="./fruit/pear-gf679252a5_1280.png";
        
    }
    
}

function changeFeed(){
    if(result==1){
        document.getElementById("feed").innerHTML="Correct!! Guess another!"
    }
    else{
        document.getElementById("feed").innerHTML="Incorrect!! Try again!"
    }
}

function guessApple(){
    if(f==3){
        document.getElementById("bod").style.backgroundColor="green";
        result=1;
    }
    else{
        document.getElementById("bod").style.backgroundColor="red";
        result=0;
    }
    
    changeFeed();
}

function guessOrange(){
    if(f==2){
        document.getElementById("bod").style.backgroundColor="green";
        result=1;
    }
    else{
        document.getElementById("bod").style.backgroundColor="red";
        result=0;
    }
    
    changeFeed();
    

}

function guessPear(){
    if(f==4){
        document.getElementById("bod").style.backgroundColor="green";
        result=1;
    }
    else{
        document.getElementById("bod").style.backgroundColor="red";
        result=0;
    }
    
    changeFeed();

}

function guessPineapple(){
    if(f==1){
        document.getElementById("bod").style.backgroundColor="green";
        result=1;
    }
    else{
        document.getElementById("bod").style.backgroundColor="red";
        result=0;
    }
    
    changeFeed();

}

function playAgain(){
    
    document.getElementById("feed").innerHTML="Guess Which fruit?";
    document.getElementById("bod").style.backgroundColor="white";
    f++;
    if(f==5){
        f=1;
    }
    changeFruit();
}


