
 document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

function setup(){
  createCanvas(400, 400);
    angleMode(DEGREES)
}

function draw(){
    clear();
    translate(200, 200);
    rotate(-90);
    
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    
    strokeWeight(6);
    stroke(255, 100, 150);
    noFill();
    let secondAngle = map(sc, 0, 59, 0 ,360);
    arc(0, 0, 300, 300, 0, secondAngle);
    
    
    stroke(251, 222, 68)
     let minAngle = map(mn, 0, 59, 0 ,360);
    arc(0, 0, 280, 280, 0, minAngle);
    
    stroke(40, 51, 74)
    let hourAngle = map(hr % 12, 0, 12, -90 ,360);
    arc(0, 0, 260, 260, 0, hourAngle);
    
    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();
    
    push();
    rotate(minAngle);
    stroke(251, 222, 68);
    line(0, 0, 75, 0);
    pop();
    
    push();
    rotate(hourAngle);
    stroke(40, 51, 74);
    line(0, 0, 50, 0);
    pop();
    
    stroke(255);
    point(0, 0);
    
  
    
    
//    fill(255);
//    noStroke();
//    text(hr + ':' + mn + ':' + sc, 10, 200)
    
}

