var osc;
var env;
var slider;


function setup(){

    createCanvas(400,400);
    background(100);

    slider = createSlider(0, 1, 0.5, 0.05);
    slider.position(100, 600);
    slider.style('width', '180px');

    env = new p5.Env(0.01,0.2,0.5,1);
    
    osc = new p5.Oscillator();
    osc.amp(env);
    osc.setType("sine"); 
}


function keyPressed(){
    console.log("You pressed the key" + key);
    osc.start();
    var fr = 0;

    switch(key){
   
        /////////// C4

        case "Z":
        fill(200,100,100);
        ellipse(200, 200, 70, 70);
        fr = 261.626 ;
        break;

        case "S":
        fill(200,200,100);
        ellipse(200, 200, 70, 70);
        fr = 277.183;
        break;

        case "X":
        fill(100,100,200);
        ellipse(200, 200, 70, 70);
        fr = 293.665 ;
        break;

        case "D":
        fill(20,500,10);
        ellipse(200, 200, 70, 70);
        fr = 311.127 ;
        break;

        case "C":
        fill(10,10,111);
        ellipse(200, 200, 70, 70);
        fr = 329.628 ;
        break;

        case "V":
        fill(14,86,48);
        ellipse(200, 200, 70, 70);
        fr = 349.228 ;
        break;

        case "G":
        fill(200,0,10);
        ellipse(200, 200, 70, 70);
        fr = 369.994 ;
        break;

        case "B":
        fill(84,25,83);
        ellipse(200, 200, 70, 70);
        fr = 391.995 ;
        break;

        case "H":
        fill(59,10,10);
        ellipse(200, 200, 70, 70);
        fr = 415.305 ;
        break;

        case "N":
        fill(204,5,13);
        ellipse(200, 200, 70, 70);
        fr = 440.00;
        break;

        case "J":
        fill(200,200,200);
        ellipse(200, 200, 70, 70);
        fr = 466.164 ;
        break;

        case "M":
        fill(40,140,440);
        ellipse(200, 200, 70, 70);
        fr = 493.883 ;
        break;

        case '¼':
        fill(100,50,25);
        ellipse(200, 200, 70, 70);
        fr = 523.251 ;
        break;

        case "L":
        fill(58,58,19);
        ellipse(200, 200, 70, 70);
        fr = 554.365 ;
        break;

        case "¾":
        fill(2,57,31);
        ellipse(200, 200, 70, 70);
        fr = 587.330 ;
        break;

        case "º":
        fill(84,100,38);
        ellipse(200, 200, 70, 70);
        fr = 622.254 ;
        break;

        case "½":
        fill(86,20,170);
        ellipse(200, 200, 70, 70);
        fr = 659.255 ;
        break;

        /////////// C5

        case "Q":
        fill(100,50,25);
        ellipse(200, 200, 70, 70);
        fr = 523.251 ;
        break;

        case "2":
        fill(58,58,19);
        ellipse(200, 200, 70, 70);
        fr = 554.365 ;
        break;

        case "W":
        fill(2,57,31);
        ellipse(200, 200, 70, 70);
        fr = 587.330 ;
        break;

        case "3":
        fill(84,100,38);
        ellipse(200, 200, 70, 70);
        fr = 622.254 ;
        break;

        case "E":
        fill(86,20,170);
        ellipse(200, 200, 70, 70);
        fr = 659.255 ;
        break;

        case "R":
        fill(26,26,110);
        ellipse(200, 200, 70, 70);
        fr = 698.456 ;
        break;

        case "5":
        fill(374,202,11);
        ellipse(200, 200, 70, 70);
        fr = 739.989 ;
        break;

        case "T":
        fill(74,52,35);
        ellipse(200, 200, 70, 70);
        fr = 783.991 ;
        break;

        case "6":
        fill(82,21,10);
        ellipse(200, 200, 70, 70);
        fr = 830.609 ;
        break;

        case "Y":
        fill(12,21,11);
        ellipse(200, 200, 70, 70);
        fr = 880.00 ;
        break;

        case "7":
        fill(8,2,10);
        ellipse(200, 200, 70, 70);
        fr = 932.328 ;
        break;

        case "U":
        fill(564,23,120);
        ellipse(200, 200, 70, 70);
        fr = 987.767 ;
        break;

        case "I":
        fill(123,235,130);
        ellipse(200, 200, 70, 70);
        fr = 1046.502 ;
        break;

        case "9":
        fill(61,70,148);
        ellipse(200, 200, 70, 70);
        fr = 1108.731 ;
        break;

        case "O":
        fill(223,465,112);
        ellipse(200, 200, 70, 70);
        fr = 1174.659 ;
        break;

        case "0":
        fill(12,80,151);
        ellipse(200, 200, 70, 70);
        fr = 1244.508 ;
        break;

        case "P":
        fill(63,42,300);
        ellipse(200, 200, 70, 70);
        fr = 1318.510 ;
        break;
    }

    osc.freq(fr);
    env.triggerAttack();
    var val = slider.value();
    env.mult(val);
}

function keyReleased(){
    console.log("You released the key" + key);
    env.triggerRelease();
    background(100);
}