let carrinhoDeItens = [];
let valorTotal = 0;
let compras = document.querySelector(".carrinho__produtos__produto");
let total = document.getElementById("valor-total");
limpar();

function adicionar(){
    let produto = document.querySelector(".produto-input").value;
    let quantidade = document.getElementById("quantidade").value;
    if(isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor insira um valor maior que 0!");
      return;
    }
    const match = produto.match(/(.*) - R\$(.*)/);

    if (match) {
      const produtoNome = match[1].trim();
      const produtoValor = parseInt(match[2].trim());
        valorTotal = valorTotal + produtoValor * quantidade;
        carrinhoDeItens.push(`<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoValor}</span><br>`);
        compras.innerHTML = carrinhoDeItens.join('');
        total.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal.toFixed(2)}</span>`;

    } else {
      console.log('Formato de valor inesperado');
    }

// ao que clicar nos botão adicionar as seguintes coisas devem acontecer
// o campo Qtde deve atualizar para '', e o produto + sua quantidade devem ser listados na 
// lista do lado direito, que esta somando o valor total da compra    
}

function limpar(){
    document.getElementById("quantidade").value = '';
    carrinhoDeItens = [];
    compras.innerHTML = '';
    valorTotal = 0;
    document.getElementById("valor-total").innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
// Deve limpar todos os campos do site.
}

// Resolução do curso
// let totalGeral;
// limpar();

// function adicionar() {
//     let produto = document.getElementById('produto').value;
//     let nomeProduto = produto.split('-')[0];
//     let valorUnitario = produto.split('R$')[1];
//     let quantidade = document.getElementById('quantidade').value;
//     let preco = quantidade * valorUnitario;

//     let carrinho = document.getElementById('lista-produtos');
//     carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
//     <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
//   </section>`;

//     totalGeral = totalGeral + preco;
//     let campoTotal = document.getElementById('valor-total');
//     campoTotal.textContent = `R$ ${totalGeral}`;
//     document.getElementById('quantidade').value = 0;
// }

// function limpar() {
//     totalGeral = 0;
//     document.getElementById('lista-produtos').innerHTML = '';
//     document.getElementById('valor-total').textContent = 'R$0';
// }