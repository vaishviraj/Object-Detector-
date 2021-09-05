status_new="";
value="";

function setup(){
    video = createCapture(VIDEO);
    video.hide();

    canvas = createCanvas(500, 400);
    canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status_new = true;
}

function draw(){
    image(video, 0, 0, 500, 400);
}