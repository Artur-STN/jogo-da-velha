var jogadorUm;
var jogadorDois;

var vez;

function closeMenu(opçãoEscolhida) {

    let menu = document.getElementById("menu")

    menu.style.left = "-100vw"

    jogadorUm = opçãoEscolhida

    if (jogadorUm == "X") {

        jogadorDois = "O"
        vez = "jogadorUm"

    } else if(jogadorUm == "O"){

        jogadorDois = "X"
        vez = "jogadorDois"

    }

}

function insertLetter(divId) {

    let div = document.getElementById(divId)

    if (vez == "jogadorUm") {

        div.innerText = "X"
        vez = "jogadorDois"

        div.style.background = "#43AA8B"

    } else if(vez == "jogadorDois") {

        div.innerText = "O"
        vez = "jogadorUm"

        div.style.background = "#F94144"

    }

    div.style.color = "white"
    div.style.border = "1px solid white"
    div.style.borderRadius = "10px"

}

function newGame() {
    
    
    for (let index = 1; index <= 9; index++) {
        
        let div = document.getElementById(`divNumber${index}`)

        div.innerText = ""
        div.style.background = "white"
        div.style.border = "1px solid black"
        div.style.borderRadius = "0"
        
    }

    let menu = document.getElementById("menu")

    // menu.style.left = "0"

}
