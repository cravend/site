var numCircles = 12;
var circleDiameter;
var circleRadius;
function setup() {
    createCanvas(480, 600);
    circleDiameter = width/numCircles;
    circleRadius = circleDiameter/2;
}

function draw() {
    var isShifted = false;
    var y = height;
    var rVal = 255;
    var gVal = 0;
    var bVal = 0;
    
    while (y >= 0) {
        var x;
        if (isShifted) {
            x = circleRadius;
        } else {    
            x = 0;
        }
        
        while (x <= width) {
            fill(color(rVal, gVal, bVal));
            stroke(color(rVal, gVal, bVal));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        
        y = y - circleRadius;
        isShifted = !isShifted;
        rVal = rVal - 2;
        gVal = gVal + 7;
        bVal = bVal + 3;
    }
}