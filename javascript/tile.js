export class Tile {
    constructor(xPosition, yPosition, texture) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.textureSRC = "img/" + texture + "-texture.png";
        this.textureID = texture;
    }
    drawTexture() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let textureList = ["coal","dirt","grass","iron","leaves","log","stone","air"];
        let baseImage = new Image();
        if (textureList.includes(this.textureID) == true) {
            baseImage.src = this.textureSRC;
        } else {
            baseImage.src = "img/undefined-texture.png";
        }
        ctx.drawImage(baseImage,this.xPosition,this.yPosition,32,32);
    }
}