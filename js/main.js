var playerUm = ["playerUm", "X"]
var playerDois = ["playerDois", "O"]

var first;

function primeiroJogador() {
    
    let numeroAleatorio = Math.floor(Math.random() * 2) + 1

    if (numeroAleatorio == 1) {

        first = "player Um"

    } else if (numeroAleatorio == 2) {

        first = "player Dois"

    }

    alert(`Primeiro a jogar é ${first}`)

}

primeiroJogador()

function insertLetter(divId) {

    let div = document.getElementById(divId)

    
    
}