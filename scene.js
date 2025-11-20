let sceneNum=1;
let count=0;
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
}