controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
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