// juego de piedra papel tijera

function getComputerChoice(){ // esta funcion devuelve aleatoriamente 
    // entre piedra papel o tijera

    const play = ['piedra','papel','tijera'];
    return play[Math.floor(Math.random() * play.length)]
}

function playRound(playerSelection,computerSelection){
    console.log(playerSelection , computerSelection)
    // esta funcion determina al ganador

    if (playerSelection === 'piedra' && computerSelection === 'papel'){
        return 'computer'
    }
    else if (playerSelection === 'papel' && computerSelection === 'piedra'){
        return 'player'
    }
    else if (playerSelection === 'tijera' && computerSelection === 'piedra'){
        return 'computer'
    }
    else if (playerSelection === 'piedra' && computerSelection === 'tijera'){
        return 'player'
    }
    else if (playerSelection === 'tijera' && computerSelection === 'papel'){
        return 'player'
    }
    else if (playerSelection === 'papel' && computerSelection === 'tijera'){
        return 'computer'
    }
    else{
        return 'empate'
    }
}

function game(){

    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++){
       let playerSelection = prompt('piedra,papel o tijera: ');
       const computerSelection = getComputerChoice();
       let result = playRound(playerSelection,computerSelection)
       if ( result === 'player'){
        player += 1
       }
       else if (result === 'computer'){
        computer += 1
       }
    }
    if (computer < player){
        return 'the winner is player'
    }else{
        return 'the winner is computer'
    }
}
console.log(game())