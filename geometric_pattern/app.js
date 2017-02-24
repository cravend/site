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
    var y = 0;
    
    while (y <= height) {
        var x;
        if (isShifted) {
            x = circleRadius;
        } else {    
            x = 0;
        }
        
        while (x <= width) {
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        
        y = y + circleRadius;
        isShifted = !isShifted;
    }
}