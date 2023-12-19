var array1 = ['超','極','激','弱',''];
var array2 = ['大','小','末',' '];
var array3 = ['吉','凶'];
var roulette_timer = false;
var roulette_timer1 = false;
var roulette_timer2 = false;
var roulette_timer3 = false;
var timer1;
var timer2;
var timer3;

document.onkeydown = onkeydown => {
    if(onkeydown.key == ' ' && !roulette_timer){
        roulette_timer = true;
        roulette_timer1 = true;
        roulette_timer2 = true;
        roulette_timer3 = true;
        timer1 = setInterval(c1,50);
        timer2 = setInterval(c2,50);
        timer3 = setInterval(c3,50);
    }
    if(onkeydown.key == '1' && roulette_timer1){
        clearInterval(timer1);
        roulette_timer1 = false;
    }
    if(onkeydown.key == '2' && roulette_timer2){
        clearInterval(timer2);
        roulette_timer2 = false;
    }
    if(onkeydown.key == '3' && roulette_timer3){
        clearInterval(timer3);
        roulette_timer3 = false;
    }
    if(!roulette_timer1&&!roulette_timer2&&!roulette_timer3){
        roulette_timer = false;
    }
}

var c1 = () => {
    var textchange = (i) =>{
        document.getElementById('1').innerHTML = array1[i];
    }
    r = Math.floor(Math.random()*array1.length);
    textchange(r);
    console.log(r);
}

var c2 = () => {
    var textchange = (i) =>{
        document.getElementById('2').innerHTML = array2[i];
    }
    r = Math.floor(Math.random()*array2.length);
    textchange(r);
    console.log(r);
}

var c3 = () => {
    var textchange = (i) =>{
        document.getElementById('3').innerHTML = array3[i];
    }
    r = Math.floor(Math.random()*array3.length);
    textchange(r);
    console.log(r);
}