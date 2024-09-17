// Variável para armazenar o valor total dos produtos no carrinho
let totalGeral;
limpar();

// Função para adicionar um produto ao carrinho
function adicionar() {
    let produto = document.getElementById('produto').value; // Obtém o produto selecionado
    // Divide os dados para extrair o nome e valor do produto
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    let quantidade = document.getElementById('quantidade').value; // Obtém a quantidade digitada

    // Calcula o preço total
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    // Atualiza a lista de produtos selecionados
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`;

    // Atualiza o valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = ''; // Limpa o campo de quantidade após escolha

}

// Função para limpar o carrinho
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';

}
