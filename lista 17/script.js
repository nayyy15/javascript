class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes() {
        console.log(`O livro ${this.titulo} do Autor ${this.autor} contem ${this.paginas} páginas `)
    }
}

const livro = new Livro("Ed & Lorraine Warren", "Gerald Brittle", 800)
livro.mostrarDetalhes();

class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    verSaldo(){
        console.log(`0 ${this.titular} tem ${this.saldo}`)
    }
}

const conta = new ContaBancaria("Nayara" , 3000)
conta.verSaldo()
conta.depositar(300)
conta.verSaldo()
conta.sacar(400)
conta.verSaldo()

class Pet {
    constructor(nome,especie, idade){
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }
    Falar(fala) {
        console.log(`${this.especie} faz ${fala}`)
    }
}

const pet = new Pet ("Mina", "Gato", 17)
pet.Falar("Miau")

class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }

    assistir() {
        console.log(`Você está assistindo ${this.titulo}, que dura ${this.duracao} minutos.`)
    }
}

const filme = new Filme("Invicação do Mal", "Terror/Mistérop", "1h 52m")
filme.assistir();

class Musica {
    constructor(titulo, artista, tempo) {
        this.titulo = titulo
        this.artista = artista
        this.tempo = tempo
    }

    tocar() {
        console.log(`Tocando ${this.titulo} de ${this.artista}`)
    }
}

const musica = new Musica("Remember Me", "D4vd e League of Legends ", "2:03")
musica.tocar();