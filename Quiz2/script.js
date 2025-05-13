// Cada pergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
    {
      pergunta: "Qual foi o principal objetivo das Grandes Navegações no século XV?",
      opcoes: [
        "Espalhar o cristianismo pelo mundo",
        "Encontrar novos territórios para a Igreja Católica",
        "Buscar novas rotas comerciais para as Índias",
        "Explorar a América do Norte"
      ],
      correta: 2
    },
    {
      pergunta: "O que marcou o fim da Idade Média e o início da Idade Moderna?",
      opcoes: [
        "A Revolução Industrial",
        "A queda do Império Romano",
        "A Revolução Francesa",
        "A queda de Constantinopla em 1453"
      ],
      correta: 3
    },
    {
      pergunta: "Qual era a principal característica do sistema feudal?",
      opcoes: [
        "Propriedade coletiva das terras",
        "Centralização do poder político",
        "Relações de dependência entre senhores e servos",
        "Forte mobilidade social"
      ],
      correta: 2
    },
    {
      pergunta: "O Iluminismo defendia:",
      opcoes: [
        "A intervenção da Igreja na política",
        "O absolutismo monárquico",
        "A razão e os direitos naturais do homem",
        "O retorno aos valores medievais"
      ],
      correta: 2
    },
    {
      pergunta: "A Revolução Francesa teve como lema:",
      opcoes: [
        "Deus, Pátria e Família",
        "Ordem e Progresso",
        "Liberdade, Igualdade e Fraternidade",
        "Paz, Amor e Justiça"
      ],
      correta: 2
    },
    {
      pergunta: "A escravidão no Brasil foi oficialmente abolida em:",
      opcoes: [
        "1822",
        "1889",
        "1888",
        "1850"
      ],
      correta: 2
    },
    {
      pergunta: "Qual foi a principal causa da Primeira Guerra Mundial?",
      opcoes: [
        "A Revolução Russa",
        "A corrida armamentista e o assassinato do arquiduque Francisco Ferdinando",
        "O expansionismo dos Estados Unidos",
        "A ascensão do nazismo"
      ],
      correta: 1
    },
    {
      pergunta: "O que foi a Guerra Fria?",
      opcoes: [
        "Conflito armado entre EUA e URSS",
        "Disputa ideológica, política e militar entre EUA e URSS após a Segunda Guerra Mundial",
        "Luta contra o nazismo",
        "Conflito entre EUA e Japão"
      ],
      correta: 1
    },
    {
      pergunta: "A ditadura militar no Brasil começou em:",
      opcoes: [
        "1930",
        "1964",
        "1945",
        "1988"
      ],
      correta: 1
    },
    {
      pergunta: "O Mercosul é:",
      opcoes: [
        "Um tratado militar sul-americano",
        "Um organismo de defesa da Amazônia",
        "Um bloco econômico formado por países da América do Sul",
        "Uma organização ambientalista"
      ],
      correta: 2
    }
]

// variáveis para controlar o quiz
let perguntaAtual = 0 // Qual pergunta está sendo mostrada
let pontuacao = 0 // Quantidade dos acertos
let erros = 0 // Quantidade dos erros
let opcaoSelecionada = null // Qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

// função que mostra a pergunta atual
function mostrarPergunta() {
    // Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" // limpa as opções anteriores
    // Cria um botão para cada opção de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true // desabilita o botão de próxima
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice

    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false // habilita o botão de próxima
}

function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
    // Verifica se a resposta está correta
    if (opcaoSelecionada == perguntas[perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

// Botão para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variáveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuação final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})

// Inicia o quiz com a primeira pergunta
mostrarPergunta()

  