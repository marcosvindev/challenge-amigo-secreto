//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Modo Copiado

function textos(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
    
}

textos("h1", "Sorteie um Amigo!");
textos("h2", "Digite o nome dos seus amigos");

//Modo Aprendido

/*
let boasVindas = document.querySelector("h1");
boasVindas.innerHTML = "Hora de Jogar!";

let campoSortear = document.querySelector("h2");
campoSortear.innerHTML = "Quais amigos você gostaria de sortear?";
*/

// =====================================================


let amigos = [];

function adicionarAmigo(a1, a2, a3, a4) {
    let amigoAdicionado = document.querySelector("input").value;
    
    if (amigoAdicionado == "") {
        return alert("Nenhum Amigo Adicionado");
    }  else {
        
    }  
    limparCampo();
}



function sortearAmigo() {
    let amigoSorteado = document.querySelector("input").value;
    if (amigoSorteado == "") {

    } else {
        return textos(`h1`, `O amigo escolhido foi ${amigoSorteado}!`);
    }

}


function limparCampo() {

amigoAdicionado = document.querySelector("Input");
amigoAdicionado.value = "";
    
}
