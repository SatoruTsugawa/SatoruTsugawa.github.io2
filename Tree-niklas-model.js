//Tree-niklas-model.js

//========GUI========

function setup() {

  textTitle=createP('Tree Niklas model');
  textTitle.position(235,-20);
  textTitle.style('font-size','40px');
  textTitle.style('font-weight','bold');
  let cp;
  cp=createCanvas(700, 450, WEBGL);
  cp.position(50,90);
  sliderSetting();
}

function draw(){
  orbitControl();
  background(200);
  translate(0,170,0);
  rotateY(Math.PI/4);
  rotateY(frameCount * 0.005);
  rotateX(-Math.PI/30);
  drawXYZaxis();
//  drawCenter();
  //drawSide();
//  drawOpenRings();

  h=sliderH.value();
  phi=sliderPhi.value()*Math.PI/100.0;
  gamma=sliderGamma.value()*Math.PI/100.0;
  w0=sliderW0.value();
  w1=sliderW.value()/100.0;
  h0=sliderL0.value();
  h1=sliderL.value()/100.0;

  drawTree();
  
}

function drawXYZaxis(){
  strokeWeight(1);
  line(-200,0,0,200,0,0);
//  line(0,-200,0,0,200,0);
  line(0,0,-200,0,0,200);
}

function drawTree(){
  fill('rgb(205,133,63)');
  let cheight=h0; //cylinder-height 50 fix
  if(h>=1){
    translate(0,-cheight*0.5,0); //set bottom at origin
    cylinder(w0,cheight,10,5);
    translate(0,-cheight*0.5,0); //set bottom at origin
    if(h>=2){
    for(let i2=0;i2<=1;i2++){
    push();
     let v0= new p5.Vector(0,cheight*h1*0.5,0);
     if(i2==0){
      rotateX(phi,0,0);
      rotateY(gamma,0,0);
     }
     if(i2==1){
      rotateX(-phi,0,0);
      rotateY(gamma,0,0);
     }
     translate(-v0.x,-v0.y,-v0.z);
     cylinder(w0*w1,cheight*h1,10,5);
     translate(-v0.x,-v0.y,-v0.z);
     if(h>=3){
     for(let i3=0;i3<=1;i3++){
     push();
      let v0= new p5.Vector(0,cheight*h1*h1*0.5,0);
      if(i3==0){
       rotateX(phi,0,0);
       rotateY(gamma,0,0);
      }
      if(i3==1){
       rotateX(-phi,0,0);
       rotateY(gamma,0,0);
      }
      translate(-v0.x,-v0.y,-v0.z);
      cylinder(w0*w1*w1,cheight*h1*h1,10,5);
      translate(-v0.x,-v0.y,-v0.z);
      if(h>=4){
      for(let i4=0;i4<=1;i4++){
      push();
       let v0= new p5.Vector(0,cheight*h1*h1*h1*0.5,0);
       if(i4==0){
        rotateX(phi,0,0);
        rotateY(gamma,0,0);
       }
       if(i4==1){
        rotateX(-phi,0,0);
        rotateY(gamma,0,0);
       }
       translate(-v0.x,-v0.y,-v0.z);
       cylinder(w0*w1*w1*w1,cheight*h1*h1*h1,10,5);
       translate(-v0.x,-v0.y,-v0.z);
       if(h>=5){
       for(let i5=0;i5<=1;i5++){
       push();
        let v0= new p5.Vector(0,cheight*h1*h1*h1*h1*0.5,0);
        if(i5==0){
         rotateX(phi,0,0);
         rotateY(gamma,0,0);
        }
        if(i5==1){
         rotateX(-phi,0,0);
         rotateY(gamma,0,0);
        }
        translate(-v0.x,-v0.y,-v0.z);
        cylinder(w0*w1*w1*w1*w1,cheight*h1*h1*h1*h1,10,5);
        translate(-v0.x,-v0.y,-v0.z);
        if(h>=6){
        for(let i6=0;i6<=1;i6++){
         push();
          let v0= new p5.Vector(0,cheight*h1*h1*h1*h1*h1*0.5,0);
          if(i6==0){
           rotateX(phi,0,0);
           rotateY(gamma,0,0);
          }
          if(i6==1){
           rotateX(-phi,0,0);
           rotateY(gamma,0,0);
          }
          translate(-v0.x,-v0.y,-v0.z);
          cylinder(w0*w1*w1*w1*w1*w1,cheight*h1*h1*h1*h1*h1,10,5);
         pop();
        }}//iffor6
       pop();
      }}//iffor5
      pop();
     }}//iffor4
     pop();
    }}//iffor3
    pop();
   }}//iffor2
  }//if1
}

function sliderSetting(){
  let sliderLength='200px';
  let kankaku=50;
  let sliderLeftEnd=780;
  let sliderYposition=125;
  let titleYposition=78;
  let labelLeftEnd=780;

  sliderH = createSlider(0, 6, 6);
  sliderH.position(sliderLeftEnd, sliderYposition);
  sliderH.style('width',sliderLength);
  textH=createP('Hierarchy');
  textH.position(labelLeftEnd,titleYposition);
  textH.style('font-size','20px');

  sliderPhi = createSlider(0, 100, 15);
  sliderPhi.position(sliderLeftEnd, sliderYposition+kankaku);
  sliderPhi.style('width',sliderLength);
  textPhi=createP('Branch-opening angle');
  textPhi.position(labelLeftEnd,titleYposition+kankaku);
  textPhi.style('font-size','20px');

  sliderGamma = createSlider(0, 100, 20);
  sliderGamma.position(sliderLeftEnd, sliderYposition+kankaku*2);
  sliderGamma.style('width',sliderLength);
  textGamma=createP('Branch-rotating angle');
  textGamma.position(labelLeftEnd,titleYposition+kankaku*2);
  textGamma.style('font-size','20px');

  sliderW0 = createSlider(0, 15, 10);
  sliderW0.position(sliderLeftEnd, sliderYposition+kankaku*3);
  sliderW0.style('width',sliderLength);
  textW0=createP('Initial width');
  textW0.position(labelLeftEnd,titleYposition+kankaku*3);
  textW0.style('font-size','20px');

  sliderW = createSlider(50, 100, 75);
  sliderW.position(sliderLeftEnd, sliderYposition+kankaku*4);
  sliderW.style('width',sliderLength);
  textW=createP('Decreasing width');
  textW.position(labelLeftEnd,titleYposition+kankaku*4);
  textW.style('font-size','20px');

  sliderL0 = createSlider(0, 55, 55);
  sliderL0.position(sliderLeftEnd, sliderYposition+kankaku*5);
  sliderL0.style('width',sliderLength);
  textL0=createP('Initial length');
  textL0.position(labelLeftEnd,titleYposition+kankaku*5);
  textL0.style('font-size','20px');

  sliderL = createSlider(50, 100, 100);
  sliderL.position(sliderLeftEnd, sliderYposition+kankaku*6);
  sliderL.style('width',sliderLength);
  textL=createP('Decreasing length');
  textL.position(labelLeftEnd,titleYposition+kankaku*6);
  textL.style('font-size','20px');

}
