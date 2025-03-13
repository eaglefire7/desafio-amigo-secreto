// Array para armazenar os nomes
let amigos = [];
// Array para armazenar os nomes já sorteados
let sorteados = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    // Verifica se o nome é um espaço em branco
    if (nome === "") {
        alert("Não é possível inserir um espaço em branco.");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado. Insira um nome diferente.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de entrada
    inputAmigo.value = "";

    // Atualiza a lista de nomes na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de nomes na tela
f// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada nome à lista
    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('span');
        itemLista.textContent = `${index + 1}. ${amigo}`;

        // Verifica se o nome já foi sorteado
        if (sorteados.includes(amigo)) {
            itemLista.classList.add('sorteado'); // Aplica o estilo de nome sorteado
        }

        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há nomes suficientes para sortear
    if (amigos.length < 2) {
        alert("É necessário adicionar pelo menos 2 nomes para realizar o sorteio.");
        return;
    }

    // Verifica se todos os nomes já foram sorteados
    if (sorteados.length === amigos.length) {
        alert("Todos os nomes já foram sorteados.");
        return;
    }

    // Sorteia um nome que ainda não foi sorteado
    let amigoSorteado;
    do {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteado];
    } while (sorteados.includes(amigoSorteado)); // Repete até encontrar um nome não sorteado

    // Adiciona o nome sorteado ao array de sorteados
    sorteados.push(amigoSorteado);

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<div>O amigo sorteado é: <strong>${amigoSorteado}</strong></div>`;

    // Atualiza a lista de nomes para destacar o sorteado
    atualizarListaAmigos();
}

// Inicializa o botão de sorteio como ativo
document.addEventListener('DOMContentLoaded', () => {
    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.disabled = false; // Botão sempre ativo
});