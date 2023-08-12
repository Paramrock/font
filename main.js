function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function draw()
{
   background('#F7EF0A');
   textSize(5);
   fill('F7EF0A')
}