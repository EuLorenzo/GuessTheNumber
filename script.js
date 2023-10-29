let numUsu
let numMaq

function sorteio(){
    let min = 1
    let max = 100
    numMaq = Math.floor(Math.random() * (max - min))
}

function adivinha(){
    let res = document.querySelector("div#res")
    numUsu = window.prompt("Digite seu número: ")

    if(numUsu > 100 || numUsu < 1){
        window.alert("[ERRO]Número inválido ou já inserido!")
    }else{
        
        if(numUsu > numMaq){
            res.innerHTML += `<p>É um número <strong>MENOR</strong> que ${numUsu}</p>`
        }else if(numUsu < numMaq){
            res.innerHTML += `<p>É um número <strong>MAIOR</strong> que ${numUsu}</p>`
        }else{
            res.innerHTML = `<p>Você <strong>ACERTOU!!</strong></p>`
            res.innerHTML += `<p>É o número <strong>${numMaq}!!</strong></p>`
            document.querySelector("input#txtAdivinha").style.visibility = "hidden"
        }   
    }
}