namespace SpriteKind {
    export const coin = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bob.vy == 0) {
        Bob.vy = -170
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let foe: Sprite = null
let coin: Sprite = null
let Bob: Sprite = null
scene.setBackgroundColor(9)
Bob = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f d d d d d f f . . . 
    . . . . f d f d f d f d d f . . 
    . . . . f d f d d d d d f . . . 
    . . . . f d f d d f f f . . . . 
    . . . . . f d d d d d f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . f 7 f . . . . . . 
    . . . . . f f f 7 f f f . . . . 
    . . . . . f f 7 7 7 f f . . . . 
    . . . . . f f 7 7 7 f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Bob, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Bob.ay = 350
scene.cameraFollowSprite(Bob)
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 4 4 4 4 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 e 5 5 5 f . . . 
        . . . f 5 4 5 e 5 5 5 5 f . . . 
        . . . f 5 4 5 e 5 5 b 5 f . . . 
        . . . f 5 4 5 e 5 5 b 5 f . . . 
        . . . f 5 4 5 5 5 5 b 5 f . . . 
        . . . f 5 4 5 5 5 b 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 4 4 4 4 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 e 5 5 5 5 f . . 
        . . . f 5 5 5 e 5 5 5 5 5 f . . 
        . . . f 5 4 5 e 5 5 5 5 5 f . . 
        . . . f 5 4 5 e 5 5 5 b 5 f . . 
        . . . f 5 4 5 5 5 5 5 b 5 f . . 
        . . . f 5 4 5 5 5 5 b 5 5 f . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 4 5 f . . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 e 5 5 5 f . . . 
        . . . . f 5 4 5 e 5 5 5 f . . . 
        . . . . f 5 4 5 e 5 b 5 f . . . 
        . . . . f 5 4 5 5 5 b 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 e 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 b 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 4 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 e 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f 4 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 4 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 4 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 e 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 b f . . . . . 
        . . . . . . f 5 b 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f 4 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 e 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 b 5 f . . . . 
        . . . . . f 5 4 5 b 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 4 5 f . . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 e 5 5 5 f . . . 
        . . . . f 5 4 5 e 5 5 5 f . . . 
        . . . . f 5 4 5 e 5 b 5 f . . . 
        . . . . f 5 4 5 5 5 b 5 f . . . 
        . . . . f 5 4 5 5 b 5 5 f . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    foe = sprites.create(img`
        . . f f . . . . . . . . f f . . 
        . . f 4 f . . . . . . f 4 f . . 
        . . f 4 4 f f f f f f 4 4 f . . 
        . . f 4 2 2 2 2 2 2 2 2 4 f . . 
        . . . f 2 f f 2 2 f f 2 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . . f 2 2 f 2 2 f 2 2 f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f 6 6 f . . . . . . 
        . . . . . f f 6 6 f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f f . . . . f f . . . . 
        `, SpriteKind.Enemy)
}
