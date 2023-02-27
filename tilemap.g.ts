// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020200000000000000000000000000030303020202020202000000000000000303030303030303030000000000000003030303030303030300000202020202020303030303030303000003030303030303030303030303030000030303030303030303030303030300000303030303030303030303030303000003030303030303030303030303030000030303030303030303030303030300000303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 . . . . . . . 2 2 2 
2 2 2 2 2 2 . . . . . . . 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
