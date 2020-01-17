function announceWinner() {
    var player1 = Math.floor(Math.random() * 6 + 1)
    var imageDice1 = ("images/" + "dice" + player1 + ".png")
    document.querySelector("img.img1").setAttribute("src", imageDice1)
    var palyer2 = Math.floor(Math.random() * 6 + 1)
    var imageDice2 = ("images/" + "dice" + palyer2 + ".png")
    document.querySelector("img.img2").setAttribute("src", imageDice2)

    if (player1 > palyer2) {
        document.querySelector("h1").innerHTML = "Player 1 has won"
    } else if (player1 < palyer2) {
        document.querySelector("h1").innerHTML = "Player 2 has won"
    } else {
        document.querySelector("h1").innerHTML = "That's a draw"
    }
}

