// this entire script is redundant
const textureList = ["coal","dirt","grass","iron","leaves","log","stone","undefined"];
for (let i = 0; i < textureList.length; i++) {
    document.write("<img id='" + textureList[i] + "' class='texture' src='img/" + textureList[i] + "-texture.png'></img>");
}