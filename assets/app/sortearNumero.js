// DECLARAÇÕES
const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

// ATRIBUIÇÕES
elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

// FUNÇÕES
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor);
}

console.log(`Número secreto: ${numeroSecreto}`)

// EVENTOS



