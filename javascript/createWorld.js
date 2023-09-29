let protoWorldData = [];
export let worldWidth = 1500;
export let worldHeight = 70;
let dirtHeight = 0;
let stoneHeight = 40;
//init air
for (var i = 0; i < worldWidth * worldHeight; i++) {
    protoWorldData.push("air");
}
// generate dirt
for (var i = 0; i < worldWidth; i++) {
    if (dirtHeight < 2 && dirtHeight > -2) {
        dirtHeight += Math.round(2 * Math.random()) - 1;
    } else {
        if (dirtHeight >= 2) {
            dirtHeight -= 1;
        } else {
            if (dirtHeight <= -2) {
                dirtHeight += 1;
            }
        }
    }
    for (var i2 = 0; i2 < worldHeight; i2++) {
        if (i2 >= 20 + dirtHeight) {
            protoWorldData.splice(i2 + i * worldHeight,1,"dirt");
        }
    }
}
// add grass
for (var i = 0; i < worldWidth; i++) {
    for (var i2 = 0; i2 < worldHeight; i2++) {
        if (protoWorldData[i2 + i * worldHeight - 1] == "air" && protoWorldData[i2 + i * worldHeight] == "dirt") {
            protoWorldData.splice(i2 + i * worldHeight - 1,1,"grass");
        }
    }
}
// add stone
for (var i = 0; i < worldWidth; i++) {
    for (var i2 = 0; i2 < worldHeight; i2++) {
        if (i2 >= stoneHeight + Math.round(2 * Math.random()) - 1) {
            protoWorldData.splice(i2 + i * worldHeight,1,"stone");
        }
    }
}
// add tree spawners
for (var i = 0; i < worldWidth; i++) {
    for (var i2 = 0; i2 < worldHeight; i2++) {
        if (protoWorldData[i2 + i * worldHeight + 1] == "grass" && Math.round(Math.random() * 10) == 1) {
            protoWorldData.splice(i2 + i * worldHeight,1,"treeSpawner");
        }
    }
}
// spawn the trees
for (var i = 0; i < worldWidth; i++) {
    for (var i2 = 0; i2 < worldHeight; i2++) {
        if (protoWorldData[i2 + i * worldHeight] == "treeSpawner") {
            protoWorldData.splice(i2 + i * worldHeight,1,"log");
            protoWorldData.splice(i2 + i * worldHeight - 1,1,"log");
            if (Math.round(Math.random() * 3) == 1) {
                protoWorldData.splice(i2 + i * worldHeight - 2,1,"log");
                protoWorldData.splice(i2 + i * worldHeight - 3,1,"leaves");
                protoWorldData.splice(i2 + (i - 1) * worldHeight - 3,1,"leaves");
                protoWorldData.splice(i2 + (i + 1) * worldHeight - 3,1,"leaves");
                protoWorldData.splice(i2 + i * worldHeight - 4,1,"leaves");
                protoWorldData.splice(i2 + (i - 1) * worldHeight - 4,1,"leaves");
                protoWorldData.splice(i2 + (i + 1) * worldHeight - 4,1,"leaves");
                protoWorldData.splice(i2 + i * worldHeight - 5,1,"leaves");
            } else {
                if (Math.round(Math.random() * 2) == 1) {
                    protoWorldData.splice(i2 + i * worldHeight - 2,1,"log");
                    protoWorldData.splice(i2 + i * worldHeight - 3,1,"log");
                    protoWorldData.splice(i2 + i * worldHeight - 4,1,"leaves");
                    protoWorldData.splice(i2 + (i - 1) * worldHeight - 4,1,"leaves");
                    protoWorldData.splice(i2 + (i + 1) * worldHeight - 4,1,"leaves");
                    protoWorldData.splice(i2 + i * worldHeight - 5,1,"leaves");
                    protoWorldData.splice(i2 + (i - 1) * worldHeight - 5,1,"leaves");
                    protoWorldData.splice(i2 + (i + 1) * worldHeight - 5,1,"leaves");
                    protoWorldData.splice(i2 + i * worldHeight - 6,1,"leaves");
                } else {
                    protoWorldData.splice(i2 + i * worldHeight - 2,1,"log");
                    protoWorldData.splice(i2 + i * worldHeight - 3,1,"log");
                    protoWorldData.splice(i2 + i * worldHeight - 4,1,"log");
                    protoWorldData.splice(i2 + i * worldHeight - 5,1,"leaves");
                    protoWorldData.splice(i2 + (i - 1) * worldHeight - 5,1,"leaves");
                    protoWorldData.splice(i2 + (i + 1) * worldHeight - 5,1,"leaves");
                    protoWorldData.splice(i2 + i * worldHeight - 6,1,"leaves");
                    protoWorldData.splice(i2 + (i - 1) * worldHeight - 6,1,"leaves");
                    protoWorldData.splice(i2 + (i + 1) * worldHeight - 6,1,"leaves");
                    protoWorldData.splice(i2 + i * worldHeight - 7,1,"leaves");
                }
            }
        }
    }
}
export let worldData = protoWorldData;
