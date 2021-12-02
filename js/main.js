var jogadorUm;
var jogadorDois;

var vez;

var blocos = []

function closeMenu(opçãoEscolhida) {

    let menu = document.getElementById("menu")

    menu.classList.remove("aberto")
    menu.classList.add("fechado")

    jogadorUm = opçãoEscolhida

    if (jogadorUm == "X") {

        jogadorDois = "O"
        vez = "jogadorUm"

    } else if (jogadorUm == "O") {

        jogadorDois = "X"
        vez = "jogadorDois"

    }

}

function insertLetter(divId) {

    let div = document.getElementById(`divNumber${divId}`)

    blocos.push(divId)

    if (vez == "jogadorUm") {

        div.innerText = "X"
        vez = "jogadorDois"

        div.style.background = "#43AA8B"

    } else if (vez == "jogadorDois") {

        div.innerText = "O"
        vez = "jogadorUm"

        div.style.background = "#F94144"

    }

    div.style.color = "white"
    div.style.border = "1px solid white"
    div.style.borderRadius = "10px"

    if (blocos.length >= 3) {

        verificaGanhador()

    }

    console.log(blocos)

}

function verificaGanhador() {

    let d1 = document.getElementById('divNumber1').innerText
    let d2 = document.getElementById('divNumber2').innerText
    let d3 = document.getElementById('divNumber3').innerText
    let d4 = document.getElementById('divNumber4').innerText
    let d5 = document.getElementById('divNumber5').innerText
    let d6 = document.getElementById('divNumber6').innerText
    let d7 = document.getElementById('divNumber7').innerText
    let d8 = document.getElementById('divNumber8').innerText
    let d9 = document.getElementById('divNumber9').innerText

    let p = document.getElementById('ganhador')

    let menuParabens = document.getElementById('menuParabens')

    if (d1 == d2 && d1 == d3 && d2 == d3) {

        menuParabens.classList.remove('fechado')
        menuParabens.classList.add('aberto')

        if (d1 == "X") {
            
            p.classList.add("X")

        } else if (d1 == "O") {

            p.classList.add("O")

        }

        console.log(d1, d1, d3)

    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    } else if (d1 == d2 && d1 == d3 && d2 == d3) {



    }

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
    let menuParabens = document.getElementById('menuParabens')

    menu.classList.add("aberto")
    menu.classList.remove("fechado")

    menuParabens.classList.remove("aberto")
    menuParabens.classList.add("fechado")

}
