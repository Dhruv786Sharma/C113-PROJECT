function preLoad()
{

}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.hide();

   
}

function draw()
{
    image(video, 84 ,85, 230, 230 );
  //  rect(10, 10, 380, 380, 80);
    circle(50, 40, 55);
    circle(50, 360, 55);
    circle(350, 40, 55);
    circle(350, 360, 55);
    rect(23, 70, 50, 260, 20);
    rect(324, 70, 50, 260, 20);
    ellipse(200, 360, 235, 65);
    ellipse(200, 40, 235, 65);
    strokeWeight(10);
    stroke(51);



}

function take_snapshot()
{
    
}