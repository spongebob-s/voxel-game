import { Player } from "./player.js";
import { Tile } from "./tile.js";
import { worldWidth } from "./createWorld.js";
import { worldHeight } from "./createWorld.js";
import { worldData } from "./createWorld.js";
let player = new Player(12,0,10,[]);
let tile = new Tile(0,0,null);
let scrollX = 0;
let scrollY = 0;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function draw() {
    // key input
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }
      
        switch (event.key) {
          case "ArrowDown":
            scrollY -= 4;
            break;
          case "ArrowUp":
            scrollY += 4;
            break;
          case "ArrowLeft":
            scrollX += 4;
            break;
          case "ArrowRight":
            scrollX -= 4;
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        }
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true);
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "blue";
    ctx.fill();
    for (let i = 0; i < worldWidth; i++) {
        for (let i2 = 0; i2 < worldHeight; i2++) {
            tile.xPosition = 32 * i + scrollX;
            tile.yPosition = 32 * i2 + scrollY;
            tile.textureSRC = "img/" + worldData[i2 + i * worldHeight] + "-texture.png";
            tile.textureID = worldData[i2 + i * worldHeight];
            if (tile.xPosition <= canvas.width && tile.xPosition >= -32 && tile.yPosition <= canvas.height && tile.yPosition >= -32) {
                tile.drawTexture();
            }
        }
    }
}
setInterval(draw,1);