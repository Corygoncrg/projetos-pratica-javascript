function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let escolhaIngresso = `qtd-${tipoIngresso}`;
    let quantiaIngressos = document.getElementById(escolhaIngresso).innerHTML;
    let qtdIngressos = parseInt(document.getElementById("qtd").value);
    
    if(isNaN(qtdIngressos) || qtdIngressos <= 0) {
        alert("Por favor insira um valor maior que 0!");
        return;
    }

    let resultado = parseInt(quantiaIngressos) - qtdIngressos;
    if (resultado < 0) {
        alert("Quantidade de ingressos indisponível!");
        return;
    }
    
    document.getElementById(escolhaIngresso).innerHTML = resultado;
    let palavraIngresso = resultado > 0 ? `Restam ${resultado} ingressos!` : 'Não há mais ingressos restantes!';
    alert(`Compra realizada com sucesso! ${palavraIngresso}`);    
}

// resolução do curso
// function comprar() {
//     let tipo = document.getElementById('tipo-ingresso');
//     let qtd = document.getElementById('qtd').value;

//     if (tipo.value == 'pista') {
//         comprarPista(qtd);
//     } else if (tipo.value == 'superior') {
//         comprarSuperior(qtd);
//     } else {
//         comprarInferior(qtd);
//     }
// }

// function comprarPista(qtd) {
//     let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
//     if (qtd > qtdPista) {
//         alert('Quantidade indisponível para tipo pista');
//     } else {
//         qtdPista = qtdPista - qtd;
//         document.getElementById('qtd-pista').textContent = qtdPista;
//         alert('Compra realizada com sucesso!');
//     }
// }

// function comprarSuperior(qtd) {
//     let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
//     if (qtd > qtdSuperior) {
//         alert('Quantidade indisponível para tipo superior');
//     } else {
//         qtdSuperior = qtdSuperior - qtd;
//         document.getElementById('qtd-superior').textContent = qtdSuperior;
//         alert('Compra realizada com sucesso!');
//     }
// }

// function comprarInferior(qtd) {
//     let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
//     if (qtd > qtdInferior) {
//         alert('Quantidade indisponível para tipo inferior');
//     } else {
//         qtdInferior = qtdInferior - qtd;
//         document.getElementById('qtd-inferior').textContent = qtdInferior;
//         alert('Compra realizada com sucesso!');
//     }
// }