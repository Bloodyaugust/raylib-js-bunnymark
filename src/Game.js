const r = require('raylib');
const { Bunny } = require('./Bunny.js');
class Game {
    constructor() {
        this.run = true;
        this.screenWidth = 1920;
        this.screenHeight = 1080;
        r.InitWindow(this.screenWidth, this.screenHeight, "raylibjs bunnymark");
        r.InitAudioDevice();
        r.SetTargetFPS(60);
        this.bunnies = [];
        this.lastFrameTime = new Date().valueOf();
        this.bunnySprite = r.LoadTexture('./assets/sprites/icon.png');
    }

    restart = () => {
        this.bunnies = [];
    }

    isRunning = () => {
        return (this.run && !r.WindowShouldClose());
    }

    update = () => {
        const currentFrameTime = new Date().valueOf();
        const deltaTime = (currentFrameTime - this.lastFrameTime) / 1000;

        if (r.IsKeyDown(r.KEY_SPACE)) {
            for (let i = 0; i < 10; i++) {
                this.bunnies.push(new Bunny());
            }
        }

        if (r.IsKeyPressed(r.KEY_R)) {
            this.restart();
        }

        r.BeginDrawing();
        r.ClearBackground(r.BLUE);
        this.bunnies.forEach((bunny) => {
            bunny.update(deltaTime, this.bunnySprite);
        });
        r.DrawText(`Bunnies: ${this.bunnies.length}`, 20, 20, 25, r.GREEN);
        r.DrawText(`FPS: ${r.GetFPS()}`, 20, 60, 25, r.GREEN);
        r.EndDrawing();

        this.lastFrameTime = currentFrameTime;
    }
    unload = () => {
        r.UnloadTexture(this.bunnySprite);
    }
};

module.exports.Game = Game;
