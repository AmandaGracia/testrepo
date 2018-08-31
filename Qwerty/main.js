var osc;
var env;
var slider;
var varfre = 0;

function setup(){

    createCanvas(400,300);
    background(191, 191, 191);
    

    slider = createSlider(0, 1, 0.5, 0.05);
    slider.position(600, 940);
    slider.style('width', '180px');

    env = new p5.Env(0.01,0.2,0.5,1);
    
    osc = new p5.Oscillator();
    osc.amp(env);
    
}
function draw() {
    var val = slider.value();
    background(val, 100, 100, 1);
  }


function keyPressed(){
    console.log("You pressed the key" + key);
    osc.start();
    var n = 0;

    switch(key){

        case "2":
        fill(255, 0, 0);
        ellipse(190, 130, 100, 100);
        n = 73;
        break;

        case "3":
        fill(255, 64, 0);
        ellipse(190, 130, 100, 100);
        n = 75;
        break;

        case "5":
        fill(255, 128, 0);
        ellipse(190, 130, 100, 100);
        n = 78 ;
        break;

        case "6":
        fill(255, 191, 0);
        ellipse(190, 130, 100, 100);
        n = 80 ;
        break;

        case "7":
        fill(255,255,0);
        ellipse(190, 130, 100, 100);
        n = 82;
        break;

        case "9":
        fill(191,255,0);
        ellipse(190, 130, 100, 100);
        n = 85;
        break;

        case "0":
        fill(128,255,0);
        ellipse(190, 130, 100, 100);
        n = 87;
        break;

        case "Q":
        fill(64,255,0);
        ellipse(190, 130, 100, 100);
        n= 72 ;
        break;

        case "W":
        fill(0,255,0);
        ellipse(190, 130, 100, 100);
        n = 74 ;
        break;

        case "E":
        fill(0,255,64);
        ellipse(190, 130, 100, 100);
        n = 76;
        break;

        case "R":
        fill(0,255,128);
        ellipse(190, 130, 100, 100);
        n = 77 ;
        break;

        case "T":
        fill(0, 255, 191);
        ellipse(190, 130, 100, 100);
        n = 79 ;
        break;

        case 'Y':
        fill(0, 255, 255);
        ellipse(190, 130, 100, 100);
        n = 81 ;
        break;

        case "U":
        fill(0, 191, 255);
        ellipse(190, 130, 100, 100);
        n = 83;
        break;

        case "I":
        fill(0, 128, 255);
        ellipse(190, 130, 100, 100);
        n = 84;
        break;

        case "O":
        fill(0, 64, 255);
        ellipse(190, 130, 100, 100);
        n = 86 ;
        break;

        case "P":
        fill(0, 0, 255);
        ellipse(190, 130, 100, 100);
        n = 88 ;
        break;

        
        case "S":
        fill(64, 0, 255);
        ellipse(190, 130, 100, 100);
        n = 61 ;
        break;

        case "D":
        fill(128, 0, 255);
        ellipse(190, 130, 100, 100);
        n = 63 ;
        break;

        case "G":
        fill(191, 0, 255);
        ellipse(190, 130, 100, 100);
        n = 66 ;
        break;

        case "H":
        fill(255, 0, 255);
        ellipse(190, 130, 100, 100);
        n = 68;
        break;

        case "J":
        fill(255, 0, 191);
        ellipse(190, 130, 100, 100);
        n = 70 ;
        break;

        case "L":
        fill(255, 0, 128);
        ellipse(190, 130, 100, 100);
        n = 73 ;
        break;

        case "À":
        fill(255, 0, 64);
        ellipse(190, 130, 100, 100);
        n = 75 ;
        break;

        case "Z":
        fill(255, 0, 0);
        ellipse(190, 130, 100, 100);
        n = 60 ;
        break;

        case "X":
        fill(255, 51, 51);
        ellipse(190, 130, 100, 100);
        n = 62 ;
        break;

        case "C":
        fill(255, 153, 51);
        ellipse(190, 130, 100, 100);
        n = 64 ;
        break;

        case "V":
        fill(255, 255, 51);
        ellipse(190, 130, 100, 100);
        n = 65;
        break;

        case "B":
        fill(102, 255, 51);
        ellipse(190, 130, 100, 100);
        n = 67 ;
        break;

        case "N":
        fill(51, 255, 153);
        ellipse(190, 130, 100, 100);
        n = 69 ;
        break;

        case "M":
        fill(51, 204, 255);
        ellipse(190, 130, 100, 100);
        n = 71 ;
        break;

        case "¼":
        fill(51, 102, 255);
        ellipse(190, 130, 100, 100);
        n = 72 ;
        break;

        case "¾":
        fill(102, 51, 255);
        ellipse(190, 130, 100, 100);
        n = 74;
        break;

        case "½":
        fill(255, 51, 204);
        ellipse(190, 130, 100, 100);
        n = 76 ;
        break;

      
    }

    osc.freq(midiToFreq(n));
    env.triggerAttack();
    var val = slider.value();
    env.mult(val);

}

function keyReleased(){
    console.log("You released the key" + key);
    osc.stop();
    background(191, 191, 191);
}