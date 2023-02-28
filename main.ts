controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
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
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
