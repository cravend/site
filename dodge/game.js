$(function(){$("#nav").load("../nav.html");});

var player;
var playerImage;
var enemy;
var enemyImage;
var isGameStarted;
var isGameOver;
var backgroundImage;

function preload() {
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}


function setup() {
    var canvas = createCanvas(512, 512);
    canvas.parent('flex');
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, -10, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    background(backgroundImage);
    isGameOver = false;
    isGameStarted = false;
    drawSprites();
}

function draw() {
    if (isGameStarted) {
        if (isGameOver) {
            gameOver();
        } else {
            if (enemy.overlap(player)) {
                isGameOver = true;
            }
            background(backgroundImage);
            
            if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
                player.position.x += 2;
            }
            if (keyDown(LEFT_ARROW) && player.position.x > playerImage.width/2) {
                player.position.x -= 2;
            }
            enemy.position.y = enemy.position.y + 5;
            
            if (enemy.position.y > height) {
                enemy.position.x = random(5, width-5);
                enemy.position.y = 0;
            }
            
            drawSprites();
        }
    }
}

function startGame() {
    $("#startButton").hide();
    isGameStarted = true;
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2)
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}