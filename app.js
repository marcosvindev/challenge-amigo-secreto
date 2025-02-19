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

function adicionarAmigo() {
    let amigoAdicionado = document.querySelector("input").value.trim();
    amigos.push(amigoAdicionado);
     console.log(amigos);

    if (amigoAdicionado == "") {
        return alert("Por favor, insira um nome.");
        
    }  else {
    }
    limparCampo();
}

function sortearAmigo() {
    
    let sorteador = Math.floor(Math.random() * amigos.length);
    textos("h2", `O amigo sorteado foi ${amigos[sorteador]}!`);

}

function limparCampo() {

amigoAdicionado = document.querySelector("Input");
amigoAdicionado.value = "";
    
}
