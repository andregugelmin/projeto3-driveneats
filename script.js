let qtdSelecionados = 0;
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let precoTotal = 0;
let nomeComida;
let nomeBebida;
let nomeSobremesa;

function selecionarItem(tipo, elemento, preco, nome){
    const selecionado = document.querySelector("." + tipo + " .item-selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("item-selecionado");
        qtdSelecionados -= 1;
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
    let mensagem;

    precoTotal = precoBebida + precoComida + precoSobremesa;

    mensagem ="Olá, gostaria de fazer o pedido:\n- Prato:"+" "+nomeComida+"\n- Bebida:" + " "+nomeBebida+"\n- Sobremesa:" + " "+nomeSobremesa+ "\nTotal:" + " " + "R$" +" " + parseFloat(precoTotal).toFixed(2);
    
    window.open("https://wa.me/5541920001323?text="+encodeURI(mensagem));
    
}