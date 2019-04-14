//Variaveis Globais
var botaoAdicionar = document.querySelector('#addItem');
var campoProduto = document.querySelector("input[name='produto']");
var campoQtd = document.querySelector("input[name='quantidade']");
var tabela = document.querySelector("tbody");


// objetos
function minhaLista(produto, quantidade){
    this.produto = produto;
    this.qtdInformada = quantidade;
    this.mostrarDados = function(){
        console.log("O produto é" + this.produto +"quantidade é" 
        +this.qtdInformada);

    }
}


//Funções
function adicionarDados(){
    var qtdInformada = campoQtd.value;
    novaLista = new minhaLista(campoProduto.value, campoQtd.value);
    novaLista.criarTabela;
  


};
function criarTabela(){
    var linha = document.createElement("tr");
    var campoProduto = document.createElement("td");
    var campoQtd = document.createElement("td");

    var txtProduto = document.createTextNode(this.produto);
    var txtQtd = ocument.createTextNode(this.qtdInformada);
    
    campoProduto.appendChild(txtProduto);
    campoQtd.appendChild(txtQtd);
    linha.appendChild(campoProduto);
    linha.appendChild(campoQtd);

    corpoTabela.appendChild(linha);

}




//Rotinas Principal
botaoAdicionar.addEventListener('click', addItem);