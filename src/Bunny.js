const r = require('raylib');

const gravity = 9.8;

class Bunny {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.velocity = { x: (Math.random() * 500) + 100, y: Math.random() * -5 };
    }

    update = (deltaTime, sprite) => {
        this.velocity.y += gravity;

        this.position.x += deltaTime * this.velocity.x;
        this.position.y += deltaTime * this.velocity.y;

        if (this.position.y >= 1080) {
            this.velocity.y = -this.velocity.y;
        }

        if (this.position.x <= 0) {
            this.velocity.x = Math.abs(this.velocity.x);
        }

        if (this.position.x >= 1920) {
            this.velocity.x = -this.velocity.x;
        }

        r.DrawTexture(sprite, this.position.x, this.position.y, r.WHITE);
    }
}

module.exports.Bunny = Bunny;
