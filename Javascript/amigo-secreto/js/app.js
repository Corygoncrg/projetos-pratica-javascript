let listaDeAmigos = [];
let listaRandomizada = [];
let listaHtml = document.getElementById("lista-amigos");

function adicionar() {
    let nome = document.getElementById("nome-amigo");
    if(nome.value == '') {
        return;
    } else if (!listaDeAmigos.includes(nome.value)) { 
        listaDeAmigos.push(nome.value);
        listaHtml.innerHTML = listaDeAmigos;
    } else {
        alert('nomes repetidos não são permitidos!')
        return;
    }
    nome.value = "";
}

function sortear() {
//    listaRandomizada = [];
    let listaSorteio = document.getElementById("lista-sorteio");
    if(listaDeAmigos.length < 4) {
        alert('são necessários no mínimo 4 jogadores!')
        return;
    }
    while(listaRandomizada.length < listaDeAmigos.length) {
        let nomeAleatorio = [(Math.floor(Math.random() * listaDeAmigos.length))]

        if (!listaRandomizada.includes(listaDeAmigos[nomeAleatorio])) {
            listaRandomizada.push(listaDeAmigos[nomeAleatorio]);
        }
    }
    listaSorteio.textContent = '';
    for(let i = 0; i < listaRandomizada.length; i++) {
        let proximo = (i + 1) % listaRandomizada.length; // O último aponta para o primeiro
        listaSorteio.innerHTML += `${listaRandomizada[i]} --> ${listaRandomizada[proximo]} <br>`;
    }
}

function reiniciar() {
    listaDeAmigos = [];
    listaRandomizada = [];
    document.getElementById("lista-sorteio").innerHTML = '';
    listaHtml.innerHTML = '';
}