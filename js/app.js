
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 180 * dt;
    if (this.x > 500) {this.x = Math.floor(-100 * ((Math.random()*5) +1))};
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
};

Player.prototype.update = function(dt) {

};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Handle user input to move the player around the game canvas
Player.prototype.handleInput = function(moveTo) {
    switch(moveTo) {
        case 'left':
            this.x - 101 < 0 ? this.x = 0 : this.x -= 101;
            break;
        case 'right':
            this.x + 101 > 500 ? this.x = 404 : this.x += 101;
            break;
        case 'up':
            this.y - 83 < -11 ? this.y = -11 : this.y -= 83;
            break;
        case 'down':
            this.y + 83 > 404 ? this.y = 404 : this.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(202, 404, 'images/char-boy.png');
const enemyRow = [65, 145, 230];
let allEnemies = [];
for (let i = 0; i < 3; i++) {
    allEnemies[i] = new Enemy(Math.floor(-100 * ((Math.random()*6)+1)), enemyRow[i]);
}
 
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
