class Personagem{
    constructor(nome, idade, tipo){
        this.nome=nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    //metodo info
    info(){
        console.log(
            "!!EXIBINDO DADOS DO PERSONAGEM!!\n",
            `\tNome do Heroi: \t${this.nome}\n`,
            `\tIdade do Heroi: \t${this.idade}\n`,
            `\tClasse do Heroi: \t${this.tipo}\n`,
        )
    }

    //metodo atacar
    atacar(){
        switch(this.tipo){
            case "mago":
                console.log("O mago atacou usando magia!!")
                break;
            case "guerreiro":
                console.log("O ninja atacou usando espada!!")
                break;
            case "monge":
                console.log("O ninja atacou usando artes marciais!!")    
                break;
            case "ninja":
                console.log("O ninja atacou usando shuriken!!")
                break;
            default:
                console.log("Apenas um aldeão sem arma!!")
                break;
        }
    }

    //metodo defender
    defender(){
        switch(this.tipo){
            case "mago":
                console.log("O mago defendeu usando barreira magica!!")
                break;
            case "guerreiro":
                console.log("O ninja defendeu usando escudo!!")
                break;
            case "monge":
                console.log("O ninja defendeu usando artes marciais!!")    
                break;
            case "ninja":
                console.log("O ninja defendeu se desviando!!")
                break;
            default:
                console.log("Um aldeão incapaz de se defender!!")
                break;
        }
    }
}

// Opções de personagens
var listClasses = ["mago","guerreiro","monge","ninja"];

var nomeHeroi, idadeHeroi, tipoHeroi;
var personagem = null;
var acaoJogador


/*
    MAIN MENU
    OPÇÕES:
            "1 - CRIAR/ATUALIZAR PERSONAGEM + JOGAR!!",
            "2 - RESUME GAME!!",
            "3 - SAIR DO JOGO!!"

    Altere os valores entre "" para verificar os possiveis resultador
    
    #################################################################
    
    "Altere o valor de @acaoJogador na função jogarComPersonagem para mudar a ação."
           "1 - ATACAR!!",
           "2 - DEFENDER!!",
           "3 - FUGIR!!"
*/


nomeHeroi = "Josefino Tumalur"
idadeHeroi = 21
tipoHeroi = "Mago".toLowerCase();
acaoJogador = 3

mainMenu(2)


function mainMenu(op){
    
    console.log("BEM VINDO AO JOGO!!!\n");
    console.log(`\n\nOPÇÃOO ESCOLHIDA: ${op}\n`);
    
    switch(op){
        case 1:
            criarPersonagem();
            jogarComPersonagem(acaoJogador);
            break;
            
        case 2:
            if(personagem == null){
                console.log("PERSONAGEM NÃO EXISTE, INDO PARA O MENU DE CRIAR PERSOANGEM!!!")
                criarPersonagem();
            } else {
                jogarComPersonagem(acaoJogador);
            }
            break;
        
        case 3:
            break;

        default:
            console.log("OPÇÃO INVALIDA!!!!!!")
            break;
        }
        
        console.log("ENCERRANDO JOGO -- OBRIGADO POR JOGAR!!!!")
        
}

function criarPersonagem(){
    if(personagem == null){
        personagem = new Personagem(nomeHeroi, idadeHeroi, tipoHeroi)
        console.log("\n PERSONAGEM CRIADO!!! \n")
        personagem.info();
        jogarComPersonagem(acaoJogador);
    } else {
        personagem = new Personagem(nomeHeroi, idadeHeroi, tipoHeroi)
        console.log("\n PERSONAGEM ATUALIZADO!!! \n")
    }
}



function jogarComPersonagem(op){
    console.log(`AÇÃO DO JOGADOR ESCOLHIDA: ${op}\n`)
    switch(op){
        case 1:
            personagem.atacar();
            break;
        
        case 2:
            personagem.defender();
            break;

        case 3:
            console.log(`${personagem.nome} tentou fugir!!!!\nSUCESSO!!!\n\n`)
            break;

        default:
            console.log("OPÇÃO INVALIDA!!!!!!")
            break;
    }
    
}