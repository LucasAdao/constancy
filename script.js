let number = 0;
document.getElementById("number").innerHTML = number;

function numberAdd(){
    if(number>=15 && number<29){
        document.body.style.backgroundImage = "url('/img/2.jpg')";
        document.getElementById("number").innerHTML = number;
        number++;
        console.log(number);
    }
    else if(number>=30 && number<45){
        number++;
        document.body.style.backgroundImage = "url('/img/3.jpg')";
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    else if(number>=45 && number<60){
        number++;
        document.body.style.backgroundImage = "url('/img/4.jpg')";
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    else if(number>=60 && number<75){
        number++;
        document.body.style.backgroundImage = "url('/img/5.png')";
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    else if(number>=75 && number<90){
        number++;
        document.body.style.backgroundImage = "url('/img/6.jpg')";
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    else if(number>=90 && number<105){
        number++;
        document.body.style.backgroundImage = "url('/img/7.png')";
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    else if(number>=105){
        number++;
        document.body.style.backgroundImage = "url('/img/8.png')";
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    
    else{
        number++;
        document.getElementById("number").innerHTML = number;
        console.log(number);
    }
    
}
function reset(){
    number = 0;
    document.getElementById("number").innerHTML = number;
    document.body.style.backgroundImage = "url('/img/1.jpg')"
    console.log(number);
}