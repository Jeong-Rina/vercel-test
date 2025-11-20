function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (count>=3)
    {
      sceneNum+=1;
      count=0;
    } 
  switch(sceneNum){
    case 1:
      sceneOne();
      break;
    case 2:
      sceneTwo();
      break;
    case 3:
      sceneThree();
      break;
    default:
      text('default',200,200);
  }
}
/*
function sceneOne()
{
  background('pink');
  text(`counter: ${count}`,10,30);//`` 이거써야 형식지정자 가능..
}
function sceneTwo()
{
  background('blue');
  text(`counter: ${count}`,10,30);
}
function sceneThree()
{
  background('purple');
  text(`counter: ${count}`,10,30);
}
function mousePressed()
{
  count+=1;
}*/