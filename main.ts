input.onButtonPressed(Button.A, function () {
    you.move(1)
})
input.onButtonPressed(Button.B, function () {
    you.turn(Direction.Right, 90)
})
let Monster_2: game.LedSprite = null
let Monster_1: game.LedSprite = null
let Monster: game.LedSprite = null
let Reverse_you: game.LedSprite = null
let you: game.LedSprite = null
basic.showString("Hello, welcome to e..rr.o..or, hmm Well that was strange well why don't you explore the place ")
basic.pause(45000)
you = game.createSprite(2, 2)
for (let index = 0; index < 1; index++) {
    basic.pause(60000)
    Reverse_you = game.createSprite(2, 2)
    basic.pause(1000)
    basic.showString("This is a little empty")
    basic.pause(500)
    Monster = game.createSprite(randint(0, 4), randint(0, 4))
    Monster_1 = game.createSprite(randint(0, 4), randint(0, 4))
    Monster_2 = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(500)
    Monster.delete()
    Monster_1.delete()
    Monster_2.delete()
    basic.pause(500)
    Monster = game.createSprite(randint(0, 4), randint(0, 4))
    Monster_1 = game.createSprite(randint(0, 4), randint(0, 4))
    Monster_2 = game.createSprite(randint(0, 4), randint(0, 4))
    Monster.delete()
    Monster_1.delete()
    Monster_2.delete()
    basic.showString("I see you survived... for now!")
}
basic.forever(function () {
	
})
basic.forever(function () {
    music.playMelody("F G F G F G F G ", 120)
})
basic.forever(function () {
    if (you.isTouching(Reverse_you)) {
        basic.showString("Ha Ha Ha!")
        control.reset()
    }
})
basic.forever(function () {
    if (you.isTouching(Monster_2)) {
        basic.showString("Ha Ha Ha!")
        control.reset()
    }
})
basic.forever(function () {
    if (you.isTouching(Monster)) {
        basic.showString("Ha Ha Ha!")
        control.reset()
    }
})
basic.forever(function () {
    if (you.isTouching(Monster_1)) {
        basic.showString("Ha Ha Ha!")
        control.reset()
    }
})
