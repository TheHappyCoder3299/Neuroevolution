var gravity=0.5;
var mutation_rate=0.01;
var pipeWidth=20;
var spacing=100;
var bird=[];
var popsize=250;
var pipeImg;
var invertedPipeImg;
var backgroundImg;
var pipe=[];
var birdSize=25;
var closestPipe;
var jumpSpeed=4;
var birdImg;
var pipeSpeed=5;
var deadBirds=[];
var counter=0;
var slider;
var generation=1;
function preload()
{
  birdImg=loadImage('bulldog_image.jpg');
  pipeImg=loadImage('pipe.png');
  invertedPipeImg=loadImage('inverted_pipe.png');
  backgroundImg=loadImage('backgroung_image_2.png');
}
function setup() {
  // put setup code here
  slider=createSlider(1,400,1);
  createCanvas(1490,705);
  for(var i=0;i<popsize;i++)
  bird.push(new Bird());
}
function draw() {
  //background(135,206,235);
  image(backgroundImg,0,0,width,height);
  for(var n=0;n<slider.value();n++)
  {
  if(bird.length==0)
  {
    nextGeneration();
    counter=0;
    pipe=[];
  }
  if(counter%80==0)
        pipe.push(new Pipe());
  if(pipe[0].x+50<0)
        pipe.splice(0,1);

  for(var i=0;i<bird.length;i++)
  {
        bird[i].update();
        bird[i].think(pipe);
  }
  for(var i=pipe.length-1;i>=0;i--)
        pipe[i].update();

  for(var j=bird.length-1;j>=0;j--)
        if(closestPipe.hits(bird[j]))
            deadBirds.push(bird.splice(j,1)[0]);
  counter++;
  }

  for(var i=0;i<bird.length;i++)
        bird[i].show();

  for(var i=pipe.length-1;i>=0;i--)
        pipe[i].show();


}
