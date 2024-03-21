var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  noisyGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function noisyGrid(){
  // your code here 
 var t = 0;
    //draw the grid
    for(var i = 0; i <= 25; i++){
        for(var j = 0; j <= 25; j++){      
            var x = stepSize * j;
            var y = stepSize * i;
            var n = noise(x/600, y/600, frameCount/(mouseX/2));
            var c = map(n, 0, 1, 0.1, 0.9);
            
            noStroke();
            var noise1 = noise(1, 1, frameCount/mouseX);
            var noise2 = noise(2, 2, frameCount/mouseX);
            var noise3 = noise(x/300, x/300, frameCount/mouseX);
            var color1 = map(noise1, 0, 1, 0, 255);
            var color2 = map(noise2, 0, 1, 0, 255);
            var color3 = map(noise3, 0, 1, 0, 255);
            
            var from = color(color3, color2, color1);
            var to = color(color1, color2, 0);
            fill(lerpColor(from, to, c));
            rect(x, y, stepSize, stepSize);
        }
    }
   

}
///////////////////////////////////////////////////////////////////////
function compassGrid(){ 
    //draw an line in each grid using translation
      for(var i = 0; i <= 25; i++){
        for(var j = 0; j <= 25; j++){ 
          push();
            var x = stepSize * j;
            var y = stepSize * i;
            var compX = stepSize/2 + (j * stepSize);  
            var compY = stepSize/2 + (i * stepSize);
            
            var n = noise(x/600, y/600, frameCount/(mouseX/2));
            var rotateAngle = map(n, 0, 60, 0, 720);
            
            var lineNoise = noise(1, 1, frameCount/(mouseX/2));
            var lineNoise2 = noise(2, 2, frameCount/(mouseX/2));
            var lineNoise3 = noise(x/200, y/200, frameCount/100);
            var lineMap = map(lineNoise, 0, 1, 5, stepSize);
            var lineRColor = map(lineNoise, 0, 1, 0, 165);
            var lineGColor = map(lineNoise2, 0, 1, 0, 42);
            var lineBColor = map(lineNoise3, 0, 1, 0, 42);
            
            stroke(lineRColor, lineGColor, lineBColor);
            translate(compX, compY);
            rotate(-rotateAngle);
            line(0, lineMap, 0, 0);
            pop();
        }
    }
}
