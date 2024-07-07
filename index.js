var random1=Math.floor(Math.random()*6 )+1;

var randomimg1="dice"+random1+".png";
var randoms1="images/"+randomimg1;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randoms1);


var random2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+random2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg2);



if(random1>random2){
    document.querySelector("h1").innerHTML="PLAYER 1 WIN !!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="PLAYER 2 WIN !!";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
 