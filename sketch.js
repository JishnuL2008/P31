var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(720, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=120; k = k + 120) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 120; j <=240; j = j + 120) {
    divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var l=240;l<=360;l=l+120){
    divisions.push(new Divisions(l,height-divisionHeight/2,10,divisionHeight));
  }

  for(var m=360;m<=480;m=m+120){
    divisions.push(new Divisions(m,height-divisionHeight/2,10,divisionHeight));
  }

  for(var n=480;n<=600;n=n+120){
    divisions.push(new Divisions(n,height-divisionHeight/2,10,divisionHeight));
  }

  for(var o=600;o<=720;o=o+120){
    divisions.push(new Divisions(o,height-divisionHeight/2,10,divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-20; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-30; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

}
 


function draw() {
  background("black");
  textSize(20)

  
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var j = 0; j < divisions.length; j++) {
  divisions[j].display();
  }

  for(var l =0;l<divisions.length;l++){
    divisions[l].display();
  }

  for(var m =0;m<divisions.length;m++){
    divisions[m].display();
  }

  for(var n =0;n<divisions.length;n++){
    divisions[n].display();

  }for(var o =0;o<divisions.length;o++){
    divisions[o].display();
  }

  //display the paricles 
for(var p=0; p < particles.length; p++){
  particles[p].display();
}

for(var q=0; q < particles.length; q++){
  particles[q].display();
}

}

