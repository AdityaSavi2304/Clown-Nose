noseX=0;
noseY=0;

function preload()
{
    clownNose=loadImage("clownnose.png");    
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    //setting up the webcam
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    //loading posenet in ml5 and initializing it
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("X = "+noseX+", Y = "+noseY);
    }
}
function draw()
{
    image(video,0,0,300,300);
    image(clownNose,(noseX-15),(noseY-15),30,30);
}
function take_snapshot()
{
    save("myImage.png")
}
