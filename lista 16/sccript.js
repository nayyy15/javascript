// 1 - Arredondamento de Números
function arredondarNumero() {
    let num = parseFloat(document.getElementById("num").value);
    document.getElementById("resultado1").innerText = 
        `Arredondado: ${Math.round(num)} | Teto: ${Math.ceil(num)} | Piso: ${Math.floor(num)}`;
}

// 2 - Maiúsculas e Minúsculas
function transformarTexto() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado2").innerText = 
        `Maiúsculas: ${nome.toUpperCase()} | Minúsculas: ${nome.toLowerCase()}`;
}

// 3 - Número Aleatório
function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado3").innerText = `Número gerado: ${numero}`;
}

// 4 - Número com Casas Decimais
function formatarDecimal() {
    let num = parseFloat(document.getElementById("decimal").value);
    document.getElementById("resultado4").innerText = `Com duas casas decimais: ${num.toFixed(2)}`;
}

// 5 - Substituir Palavras em uma Frase
function substituirPalavra() {
    let frase = document.getElementById("frase").value;
    let palavraAntiga = document.getElementById("palavraAntiga").value;
    let palavraNova = document.getElementById("palavraNova").value;
    let novaFrase = frase.replace(palavraAntiga, palavraNova);
    document.getElementById("resultado5").innerText = `Nova frase: ${novaFrase}`;
}

// 6 - Verificar se é um Número
function verificarNumero() {
    let valor = document.getElementById("valor").value;
    document.getElementById("resultado6").innerText = isNaN(valor) ? "Isso não é um número." : "Isso é um número.";
}

// 7 - Contar Letras de uma Palavra
function contarLetras() {
    let palavra = document.getElementById("palavra").value;
    document.getElementById("resultado7").innerText = `A palavra "${palavra}" tem ${palavra.length} letras.`;
}

// 8 - Encontrar a Posição de uma Letra
function encontrarLetra() {
    let palavra = document.getElementById("palavraLetra").value;
    let letra = document.getElementById("letra").value;
    let posicao = palavra.indexOf(letra);
    document.getElementById("resultado8").innerText = 
        posicao !== -1 ? `A letra "${letra}" está na posição ${posicao + 1}.` : `A letra "${letra}" não foi encontrada.`;
}

// 9 - Exibir Nome Completo
function nomeCompleto() {
    let nome = document.getElementById("primeiroNome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    document.getElementById("resultado9").innerText = `Nome completo: ${nome} ${sobrenome}`;
}

// 10 - Somar Dois Números
function somarNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let soma = num1 + num2;
    document.getElementById("resultado10").innerText = `Soma: ${soma}`;
}

