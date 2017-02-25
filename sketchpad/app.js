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
function setup() {
    var canvas = createCanvas(400, 400);
    background(255);
    fill(0);
    pointsData.on("child_added", function (point) {points.push(point.val());});
    pointsData.on("child_removed", function () {points = [];});
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
    background(255);
    for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
    }
}

function drawPoint() {pointsData.push({x: mouseX, y: mouseY});}

function drawPointIfMousePressed() {if (mouseIsPressed) {drawPoint();}}

$("#saveDrawing").on("click", saveDrawing);
function saveDrawing() {saveCanvas();}

$("#clearDrawing").on("click", clearDrawing);
function clearDrawing() {
    var result = confirm("Are you sure you want to delete? This can't be undone!");
    if (result) {
        pointsData.remove();
        points = [];
    }
}