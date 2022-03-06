img = "";
value = "";

function preload() {
    img = loadImage('golab.jpg');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    value = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}


function draw() {
    image(img,0, 0, 640, 420);
    fill("#000000");
    text("Labrador", 60, 100);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill('#000000');
    text("Golden Retriever", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}