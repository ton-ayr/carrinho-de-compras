# Carrinho de Compras :shopping_cart:

Projeto simples realizado pelo curso de logica de programação na [Alura](https://cursos.alura.com.br/) com a  implementação de um carrinho de compras simples usando HTML, CSS e JavaScript. 
Ele permite adicionar produtos ao carrinho, calcular o valor total e limpar o carrinho.

## Funcionalidades

- **Adicionar Produtos**: Insira a quantidade desejada de um produto no carrinho.
- **Calcular Total**: O valor total do carrinho é automaticamente atualizado com base nos itens adicionados.
- **Limpar Carrinho**: Permite limpar todos os itens e reiniciar o valor total.

## Estrutura do Código

### Variáveis
- `totalGeral`: Armazena o valor total dos produtos no carrinho.

### Funções
- **`adicionar()`**:
  - Obtém o nome, valor unitário e quantidade do produto selecionado.
  - Calcula o preço total do produto com base na quantidade.
  - Adiciona o produto à lista do carrinho e atualiza o valor total.

- **`limpar()`**:
  - Reseta o valor total para 0.
  - Remove todos os itens do carrinho.
  - Exibe o total como `R$ 0,00`.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
