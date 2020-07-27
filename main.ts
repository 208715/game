function リセット () {
    スプライト = game.createSprite(0, 2)
    敵 = game.createSprite(4, randint(0, 4))
}
function 削除 () {
    スプライト.delete()
    敵.delete()
}
input.onButtonPressed(Button.A, function () {
    スプライト.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    スプライト.change(LedSpriteProperty.Y, 1)
})
function 削除2 () {
    スプライト.delete()
    敵.delete()
    敵２.delete()
}
let 敵２: game.LedSprite = null
let 敵: game.LedSprite = null
let スプライト: game.LedSprite = null
let ステージ = 1
リセット()
basic.forever(function () {
    if (ステージ == 1) {
        basic.pause(400)
    }
    if (ステージ >= 2) {
        basic.pause(300)
    }
    敵.change(LedSpriteProperty.X, -1)
    if (ステージ >= 3) {
        敵２ = game.createSprite(4, randint(3, 4))
    }
    if (ステージ >= 3) {
        敵２.change(LedSpriteProperty.X, -1)
    }
    if (敵.get(LedSpriteProperty.X) == 0) {
        スプライト.change(LedSpriteProperty.X, 1)
        敵.delete()
        敵 = game.createSprite(4, randint(0, 2))
    }
    if (ステージ >= 3 && 敵２.get(LedSpriteProperty.X) == 0) {
        敵２.delete()
        敵２ = game.createSprite(4, randint(3, 4))
    }
    if (スプライト.isTouching(敵)) {
        basic.showString("GAMEOVER")
        ステージ = 1
        削除()
        リセット()
    }
    if (ステージ >= 3 && スプライト.isTouching(敵２)) {
        basic.showString("GAMEOVER")
        ステージ = 1
        削除()
        リセット()
    }
    if (ステージ >= 3 && スプライト.isTouching(敵２)) {
        basic.showString("GAMEOVER")
        ステージ = 1
        削除2()
        リセット()
    }
    if (スプライト.get(LedSpriteProperty.X) == 4) {
        basic.showString("CLEAR")
        ステージ += 1
        削除()
        リセット()
    }
})
