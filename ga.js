var matingPool;
function nextGeneration()
{
  calcFitness(deadBirds);
  fillMatingPool();
  for(var i=0;i<popsize*(1-mutation_rate/100);i++)
  {
    var child=crossover(random(matingPool),random(matingPool));
    child.Mutate(mutation_rate);
    bird.push(child);
  }

deadBirds=[];
}
function crossover(bird1,bird2)
{
  var brain=new NeuralNetwork(bird1.brain.input_nodes,bird1.brain.hidden_nodes,bird1.brain.output_nodes);
  for(var i=0;i<brain.hidden_nodes;i++)
  for(var j=0;j<brain.input_nodes;j++)
  brain.weights_ih.data[i][j]=(bird1.brain.weights_ih.data[i][j]+bird2.brain.weights_ih.data[i][j])/2;

  for(var i=0;i<brain.output_nodes;i++)
  for(var j=0;j<brain.hidden_nodes;j++)
  brain.weights_ho.data[i][j]=(bird1.brain.weights_ho.data[i][j]+bird2.brain.weights_ho.data[i][j])/2;

  for(var i=0;i<brain.hidden_nodes;i++)
  brain.bias_h.data[i][0]=(bird1.brain.bias_h.data[i][0]+bird2.brain.bias_h.data[i][0])/2;

  for(var i=0;i<brain.output_nodes;i++)
  brain.bias_o.data[i][0]=(bird1.brain.bias_o.data[i][0]+bird2.brain. bias_o.data[i][0])/2;

  var child=new Bird(brain);
  return child;
}
function calcFitness(deadBirds)
{
  var maxFit=0;
  for(var i=0;i<deadBirds.length;i++)
  maxFit=max(maxFit,deadBirds[i].score);
  for(var i=0;i<deadBirds.length;i++)
  deadBirds[i].fitness=deadBirds[i].score/maxFit;
  console.log(maxFit+" "+"Generation:-"+generation);
  generation++;
  matingPool=[];
}
function fillMatingPool()
{
  for(var i=0;i<deadBirds.length;i++)
  {
    var n=deadBirds[i].fitness*100;
    for(var j=0;j<n;j++)
    matingPool.push(deadBirds[i]);
  }
}
