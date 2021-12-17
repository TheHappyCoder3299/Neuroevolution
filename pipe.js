class Pipe
{
  constructor()
  {
    this.x=width;
    this.y=random(10,height-spacing-10);
    this.spacing=spacing;
  }
  hits(bird)
  {
    if(this.x<(bird.x+birdSize/2)&&(this.x+pipeWidth)>(bird.x-birdSize/2))
    {
      if((this.y>(bird.y-birdSize/2))||(this.y+spacing)<(bird.y+birdSize/2))
        return true;
      else
        return false;
    }
    else
    return false;
  }
  show()
  {
    fill(34,139,34);
    //rect(this.x,0,pipeWidth,this.y);
    image(invertedPipeImg,this.x,0,pipeWidth,this.y);
    //rect(this.x,this.spacing+this.y,pipeWidth,height-this.y-this.spacing);
    image(pipeImg,this.x,this.spacing+this.y,pipeWidth,height-this.y-this.spacing);
  }
  update()
  {
    this.x-=pipeSpeed;
  }
}
