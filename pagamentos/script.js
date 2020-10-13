const inputCep = document.querySelector('#cep')
let endereco = document.querySelector('#endereco')
let numero = document.querySelector('#numero')
let complemento = document.querySelector('#complemento')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')
let online = document.querySelector('#cartao-online')
let entrega = document.querySelector('#cartao-entrega')
let dinheiro = document.querySelector('#dinheiro')
let divCartaoEntrega = document.querySelector('.cartao-entrega')
let divDinheiro = document.querySelector('.dinheiro')
let divCartaoOnline = document.querySelector('.cartao-online')
let finalizarCompra = document.querySelector('#finalizar-compra')
let selecaoEntrega = document.getElementsByName('pagamento')
let erros = []

inputCep.addEventListener('keyup', cep)


async function cep () {
    if(this.value.length == 8) {
        let resp = await fetch('https://brasilapi.com.br/api/cep/v1/' + this.value)
        let cep = await resp.json()

        endereco.value = cep.street
        bairro.value = cep.neighborhood
        cidade.value = cep.city  
        estado.value = cep.state


    }
}



let validaCep = () => {
    if(inputCep.value.trim() == '' ){
         
        erros.push('O campo "CEP" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}
let validaEndereco = () => {
    if(endereco.value.trim() == '' ){
         
        erros.push('O campo "Endereço" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}
let validaNumero = () => {
    if(numero.value.trim() == '' ){
         
        erros.push('O campo "Número" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}
let validaComplemento = () => {
    if(complemento.value.trim() == '' ){
         
        erros.push('O campo "Complemento" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}
let validaBairro = () => {
    if(bairro.value.trim() == '' ){
         
        erros.push('O campo "Bairro" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}
let validaCidade = () => {
    if(cidade.value.trim() == '' ){
         
        erros.push('O campo "Cidade" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}
let validaEstado = () => {
    if(estado.value.trim() == '' ){
         
        erros.push('O campo "Estado" não foi preenchido!')
        return false
    }
    else {
        return true
    }
}


let validaNumeroCartao = () => {
    let numeroCartao = document.querySelector("#numero-cartao")
    if(numeroCartao.value.trim() == '') {
        erros.push('O número do cartão não foi preenchido')
        return false
    }
    else {
        return true
    }

}

let validaValidade = () => {
    let validadeCartao = document.querySelector("#validade-cartao")
    if(validadeCartao.value.trim() == '') {
        erros.push('A validade do cartão não foi preenchida')
        return false
    }
    else {
        return true
    }

}
let validaCVV = () => {
    let cvvCartao = document.querySelector("#CVV")
    if(cvvCartao.value.trim() == '') {
        erros.push('O número CVV do cartão não foi preenchido')
        return false
    }
    else {
        return true
    }

}
let validaNome = () => {
    let nomeCartao = document.querySelector("#nome-titular")
    if(nomeCartao.value.trim() == '') {
        erros.push('O nome do titular do cartão não foi preenchido')
        return false
    }
    else {
        return true
    }

}
let validaCPF = () => {
    let cpfCartao = document.querySelector("#cpf")
    if(cpfCartao.value.trim() == '') {
        erros.push('O CPF do titular não foi preenchido')
        return false
    }
    else {
        return true
    }

}
let validaCartaoEntrega = () => {
    
    for(let i=0; i< selecaoEntrega.length; i++) {
        if(selecaoEntrega[i].checked) {
            return true
        }
        else {
            erros.push('Selecione o cartão')
            return false
        }
    }
}
let validaDinheiro = () => {
    let dinheiroTroco = document.querySelector('#dinheiro')
    if(dinheiroTroco.value.trim() == '') {
        erros.push('Preencha o campo troco')
        return false
    }
    else {
        return true
    }
}

finalizarCompra.addEventListener('click', () => {


    if(validaCep() && validaEndereco() && validaNumero() && validaComplemento() && validaCidade()
    && validaBairro() && validaEstado() && validaNumeroCartao() && validaValidade() && validaCVV() && validaNome()
    && validaCPF() ) {
        return alert('Sua compra foi realizada com sucesso!')
    }
    else {
        return alert(erros)
    }

})



window.onload = () => {

    divCartaoEntrega.style.display = 'none'
    divDinheiro.style.display = 'none'
    

}
online.addEventListener('click', () => {
        divCartaoEntrega.style.display = 'none'
        divDinheiro.style.display = 'none'
        divCartaoOnline.style.display = 'flex'
    } ) 
entrega.addEventListener('click', () => {
        divCartaoOnline.style.display = 'none'
        divDinheiro.style.display = 'none'
        divCartaoEntrega.style.display = 'flex'
    }) 
dinheiro.addEventListener('click', ()=> {
        divCartaoOnline.style.display = 'none'
        divCartaoEntrega.style.display = 'none'
        divDinheiro.style.display = 'flex'

    }) 






