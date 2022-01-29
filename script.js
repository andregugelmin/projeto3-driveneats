function selecionarItem(tipo, elemento){
    const selecionado = document.querySelector(tipo + " .item-selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("item-selecionado")
    }

    const botao = document.querySelector("." + elemento);
    botao.classList.add("item-selecionado");    
}