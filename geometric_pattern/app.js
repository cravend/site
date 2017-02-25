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
    var rVal = 84;
    var gVal = 21;
    var bVal = 16;
    
    // 228  ->  180 +6      156,21,16
    // 45  -> 21 +1
    // 64  -> 16 -2 
    
    
    while (y >= 0) {
        var x;
        if (isShifted) {x = circleRadius;} else {x = 0;}
        
        while (x <= width) {
            fill(color(rVal, gVal, bVal));
            // stroke(color(rVal, gVal, bVal));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        // 24 circles
        y = y - circleRadius;
        isShifted = !isShifted;
        rVal = rVal + 12;
        gVal = gVal + 2;
        bVal = bVal + 4;
        
    }
}