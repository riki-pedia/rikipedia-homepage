//function
  var x= 200;
  draw = function() {
      
  background(0, 245, 82);
  //buns
  fill(227, 174, 29);
  ellipse(x+ 27, 179, 136, -34);  
  ellipse(x+27, 223, 136, -34);   
  //glizzy
  fill(255, 0, 0);
  ellipse(x+27, 203, 136, -34);
  //face
  fill(0, 0, 0);
  ellipse(x-14, 198, 10, 11);  
  ellipse(x-14, 211, 10, 11);
  ellipse(x+6, 205, 20, 23);
  fill(85, 168, 70);
  //lego
  rect(0, 200, 74, 90);
  //arms and face
  fill(255, 251, 0);
  rect(26, 218, 80, 10);
  rect(15, 161, 43, 41);
  fill(0, 0, 0);
  rect(32, 170, 5, 11);
  ellipse(40, 193, 15, 10);
  //legs
  fill(0, 26, 255);
  rect(1, 290, 29, 61);
  rect(33, 290, 36, 61);
  textSize(30);
  //motion
  if(x<75){
  fill(0, 0, 0);
  text("NUM NUM NUM",172, 73, 132, 136);
  text('YUMMY HAT DAG',100, 218);
}
x-=0.8;
fill(0, 245, 82);
//hidden
noStroke();
  rect(-1, 156, 19, 46);
  fill(255, 136, 0);
 text('-_-',250,250,217, 295);  
  };
