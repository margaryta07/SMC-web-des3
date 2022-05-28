let poxX;
let posY;

let velX;
let velY;

let radius;
let circleClr;

//UI

let sliderHue;
let clickCounter;


function setup (){
    let myCanvas = createCanvas(1100, 600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);

    sliderHue = createSlider(0, 360, 50, 1);
    sliderHue.parent('canvasUI');
    sliderHue.style('width', '1100px');

    posX = width/2;
    posY = height/2;

    velX = 1.3;
    velY = 1.8;

    radius = 300;
    circleClr = color(75, 120, 38);

    clickCounter = 0;

}

function draw (){
    background(190, 195, 95);
    fill (0, 87, 183);
    strokeWeight (2);
    rect (5, 5, 70, 30, 20);

    textSize(21);
    textAlign(CENTER);
    fill(1, 1, 0);
    text(clickCounter, 40, 29);

    circleClr = color(sliderHue.value(), 80, 100)
    fill (circleClr);
    strokeWeight (0);
    circle (posX, posY, radius * 2);
    if(posX + radius >= width || posX - radius <= 0){
        velX = velX * -1;
    }
    if(posY + radius >= height || posY - radius <= 0){
        velY = velY * -1;
    }


    posX += velX;
    posY += velY;

}

function mouseReleased(){
    if (dist(mouseX, mouseY, posX, posY) < radius){
        // circleClr = color (0, 100, 100);
        radius -= 10;
        clickCounter++;
        if(velX > 0){
            velX++;
        }
        else{
            velX--;
        }
        if(velY > 0){
            velY++;
        }
        else{
            velY--;
        }
    }

    else{
        // circleClr = color(51, 91, 99);
    }
}
