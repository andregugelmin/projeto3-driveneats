let qtdSelecionados = 0;
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let precoTotal = 0;
let nomeComida;
let nomeBebida;
let nomeSobremesa;
let Elemento;
let nomeCliente;
let enderecoCliente;

function selecionarItem(tipo, elemento, preco, nome){
    Elemento = elemento;
    const selecionado = document.querySelector("." + tipo + " .item-selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("item-selecionado");        
        qtdSelecionados -= 1;
        selecionado.querySelector("ion-icon").classList.remove("icone-selecionado");
        selecionado.querySelector("ion-icon").classList.add("desabilitado");
    }

    if(tipo === "comidas"){
        precoComida = preco;
        nomeComida = nome;
    }
    else if(tipo === "bebidas"){
        precoBebida = preco;
        nomeBebida = nome;
    }
    else if(tipo === "sobremesas"){   
        precoSobremesa = preco;
        nomeSobremesa = nome;
    }

    qtdSelecionados += 1;
    elemento.classList.add("item-selecionado");  
    const iconeElemento = elemento.querySelector("ion-icon");
    iconeElemento.classList.remove("desabilitado");
    iconeElemento.classList.add("icone-selecionado");

    if(qtdSelecionados >= 3){
        habilitarBotaoPedido();
    }
}

function habilitarBotaoPedido(){
    const botaoNaoClicavel = document.querySelector(".botao-nao-clicavel");
    const botaoClicavel = document.querySelector(".botao-clicavel");

    botaoNaoClicavel.classList.add("desabilitado");
    botaoClicavel.classList.remove("desabilitado");    
}


function fecharPedido() {
    nomeCliente = prompt("Qual seu nome?");
    enderecoCliente = prompt("Qual seu endereço?");

    precoTotal = precoBebida + precoComida + precoSobremesa;

    document.querySelector(".nome-comida").innerHTML = nomeComida;
    document.querySelector(".preco-comida").innerHTML =precoComida.toFixed(2).toString().replace('.', ',');
  
    document.querySelector(".nome-bebida").innerHTML = nomeBebida;
    document.querySelector(".preco-bebida").innerHTML = precoBebida.toFixed(2).toString().replace('.', ',');
  
    document.querySelector(".nome-sobremesa").innerHTML = nomeSobremesa;
    document.querySelector(".preco-sobremesa").innerHTML = precoSobremesa.toFixed(2).toString().replace('.', ',');

    document.querySelector(".preco-total").innerHTML = "R$" + precoTotal.toFixed(2).toString().replace('.', ',');
  
    document.querySelector(".confirmacao-pedido").classList.remove("desabilitado");

}

function cancelarPedido(){
    const telaConfirmacao = document.querySelector(".confirmacao-pedido");
    telaConfirmacao.classList.add("desabilitado");
}

function confirmarPedido(){
    let mensagem;

    mensagem ="Olá, gostaria de fazer o pedido:\n- Prato: " + nomeComida + "\n- Bebida: " + nomeBebida + "\n- Sobremesa: " + nomeSobremesa + "\nTotal: R$ " + parseFloat(precoTotal).toFixed(2) + "\n\nNome: " + nomeCliente + "\nEndereço: " + enderecoCliente;
    
    window.open("https://wa.me/5541920001323?text="+encodeURI(mensagem));
}