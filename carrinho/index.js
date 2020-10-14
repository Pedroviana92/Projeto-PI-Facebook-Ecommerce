// Excluindo cada produto
function addAcaoDeExcluirProduto(){
  let listaDeProdutos = document.querySelectorAll("#excluir")

  for(let i = 0; i <listaDeProdutos.length; i++){
    let produto = listaDeProdutos[i];

    produto.addEventListener('click', function(){
      if(window.confirm("Você tem certeza que quer excluir?")){
        produto.parentElement.parentElement.remove()
      }
    })
  }
}

addAcaoDeExcluirProduto()

let tdsValores = document.querySelectorAll('.valorr');
let total = 0;
for (let i = 0; i < tdsValores.length; i++){
  let valor = parseFloat(tdsValores[i].textContent)
  total = total + valor
  
}
//MULTIPLICANDO VALOR PELA QUANTIDADE ESCOLHIDA


//PEGANDO VALORES DO MEU CARRINHO E COLOCANDO NO SUBTOTAL

let subTotal = document.querySelector("#subtotal");
subTotal.innerHTML = total.toFixed(2);
// toFixed(2)
let numeroSubTotal = total.toFixed(2);

// PEGANDO VALOR DO TAXA DE ENTREGA
let taxaEntrega = document.querySelector("#taxa-entrega").innerHTML;
let numeroTaxaEntrega = taxaEntrega.replace(/[^\d,]/g, '.');
//SOMA SUBTOTAL + TAXA DE ENTREGA
let valorFinal = parseFloat(numeroSubTotal) + parseFloat(numeroTaxaEntrega)
document.querySelector("#valorTotal").innerHTML = valorFinal.toFixed(2);

