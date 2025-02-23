function textos(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }
}

textos("h1", "Sorteie um Amigo!");
     textos("h2", "Digite o nome dos seus amigos");

let amigos = [];

function adicionarAmigo() {
    let amigoAdicionado = document.querySelector("input").value.trim();
           if (amigoAdicionado === "") {
               alert("Por favor, insira um nome.");
                  return;}  
                    amigos.push(amigoAdicionado);
          
                        document.querySelector("input").value = "";
                            atualizarLista(); 

}

function atualizarLista() {
 let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

      amigos.forEach(amigo => {
         let item = document.createElement("li");
              item.textContent = amigo;
                  lista.appendChild(item);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um amigo, pelo menos.");
         return; 
      }
             let sorteador = Math.floor(Math.random() * amigos.length);

             textos("h2", `O amigo sorteado foi o: ${amigos[sorteador]}!`);
                 
   
}
