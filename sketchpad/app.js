$(function(){$("#nav").load("../nav.html");});

var config = {
    apiKey: "AIzaSyDzWbmDmEHjl3QI8rWhYmLeueJVslkISc0",
    authDomain: "collaborative-sketch-d9e2d.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-d9e2d.firebaseio.com",
    storageBucket: "collaborative-sketch-d9e2d.appspot.com",
    messagingSenderId: "735562726709"
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];
var toolType = 'dot';
var connectLine;

function setup() {
    var canvas = createCanvas(500,500);
    canvas.parent('sketch');
    background(255);
    fill(0);
    pointsData.on("child_added", function (point) {points.push(point.val());});
    pointsData.on("child_removed", function () {points = [];});
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
}

function mousePressed() {
  connectLine = true;
}

function mouseReleased() {
  connectLine = false;
}

function draw() {
  background(255);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    fill(point.color);
    if (point.type == "dot") {
      strokeWeight(0);
      ellipse(point.x, point.y, point.width, point.width);
    } else if (i > 0 && point.type == "line" && point.connected == true && points[i - 1].type == "line" ) {
      var previous = points[i - 1];
      stroke(point.color);
      strokeWeight(point.width);
      line(point.x, point.y, previous.x, previous.y);
    }
  }
}

function drawPoint() {
  pointsData.push({
      x: mouseX, 
      y: mouseY, 
      type: toolType, 
      color: $("#inputColor").val(),
      width: $("#inputWidth").val(),
      connected: connectLine
  });
}

function drawPointIfMousePressed() {if (mouseIsPressed) {drawPoint();}}

$("#saveDrawing").on("click", saveDrawing);
function saveDrawing() {
  var fileName = window.prompt("What do you want your picture to be called?");
  if (fileName.length != 0) {saveCanvas(fileName);}
}

$("#clearDrawing").on("click", clearDrawing);
function clearDrawing() {
    var result = confirm("Are you sure you want to delete? This can't be undone!");
    if (result) {
        pointsData.remove();
        points = [];
    }
}

$("#test").on("click", test);
function test() {
  alert($("#inputColor").val());
}

function changeWidth() {
  $("#labelWidth").text("Width: " + ($("#inputWidth").val()) + "px");
}

function changeColor() {
  $("#labelColor").text("Current Color: " + ($("#inputColor").val()));
}

function changeType() {
  /*
  if(document.getElementById('checkLine').checked) {
    toolType = "line";
  } else {
    toolType = "dot";
  }
  */
  if(document.getElementById('checkLine').checked) {
    toolType = "line";
  } else {
    toolType = "dot";
  }
}