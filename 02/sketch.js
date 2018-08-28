var x=0;
var y=350;
var x1=50;
var y2=400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
//lineas
  fill(0); 
  for (it=0; it<=300 ; it=it+100){
    
    //arriba 1 linea del centro
    triangle(x+it,y-it,x+50+it,y-it,x+50+it,y-50-it);
    triangle(x1+it,y-it,x1+50+it,y-50-it,x+50+it,y-50-it);
    //paralela 1 inf
    triangle(x1+it,y2-it,x1+50+it,y2-it,x1+50+it,y2-50-it);
    triangle(x1+50+it,y2-it,x1+50+it,y2-50-it,x1+100+it,y2-50-it);
    //paralela 2 inf
    triangle(x+200+it,y-it,x+250+it,y-it,x+250+it,y-50-it);
    triangle(x1+200+it,y-it,x1+200+it,y-50-it,x1+250+it,y-50-it);
    //paralela 3 inf
    triangle(x+300+it,y2-it,x+300+it,y2-50-it,x+350+it,y2-50-it);
    triangle(x1+200+it,y2-it,x1+250+it,y2-it,x1+250+it,y2-50-it);
    
	 //centro
    triangle(x+it,y+50-it,x+50+it,y+50-it,x+50+it,y-it);
    triangle(x+100+it,y-it,x+100+it,y-50-it,x+150+it,y-50-it);
		//paralela 1 inf
    triangle(x1+100+it,y2-it,x1+100+it,y-it,x1+150+it,y-it);
    triangle(x1+100+it,y-it,x1+150+it,y-it,x1+150+it,y-50-it);
    //paralela 2 inf
    triangle(x+200+it,y2-it,x+250+it,y2-it,x+250+it,y2-50-it);
    triangle(x1+250+it,y-it,x1+250+it,y-50-it,x1+300+it,y-50-it);
    //paralela 3 inf
    triangle(x1+300+it,y2-it,x1+300+it,y2-50-it,x1+350+it,y2-50-it);
    triangle(x1+300+it,y-it,x1+350+it,y-it,x1+350+it,y-50-it);
    
  }
  
 
  
  
}