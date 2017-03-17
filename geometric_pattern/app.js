$(function(){$("#nav").load("../nav.html");});

var numCircles = 12;
var circleDiameter;
var circleRadius;

function setup() {
    // $("#pattern").height(($(window).height()-50));
    // $("#pattern").width($(window).width());
    
    var screenWidth = $(window).width();
    var screenHeight = ($(window).height()-100);
    var canvas = createCanvas(screenWidth, screenHeight);
    canvas.parent("pattern");
    circleDiameter = width/numCircles;
    circleRadius = circleDiameter/2;
}

function draw() {
    var isShifted = false;
    var y = height;
    var rVal = 166;
    var gVal = -17;
    var bVal = 2;
    
    while (y >= 0) {
        var x;
        if (isShifted) {x = circleRadius;} else {x = 0;}
        
        while (x <= width) {
            fill(color(rVal, gVal, bVal));
            stroke(color(rVal-10, gVal-10, bVal-10));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        y = y - circleRadius;
        isShifted = !isShifted;
        rVal = rVal + 2;
        gVal = gVal + 2;
        bVal = bVal + 2;
    }
}
