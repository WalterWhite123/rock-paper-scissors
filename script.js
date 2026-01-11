    
    //Computer choice 
    
    //Give a random number between 0 and 2
    function randomNumber(){
        let randomNumber = Math.random()*2;
        let randomNumberRounded = Math.round(randomNumber);
        return randomNumberRounded;
    }
    
    // The computer choice
    function getComputerChoice(){
        let computerChoice;
        switch (randomNumber()){
            case 0: 
                computerChoice = "rock";
                break;
            case 1:
                computerChoice = "paper";
                break;
            case 2:
                computerChoice = "scissors";
                break;
    } 
    return computerChoice;
    }

    //Test
    console.log(getComputerChoice());

    

    //Human choice 
    //Prendre l'input de son choix | ok
    //Stocker dans une variable son choix | ok
    // S'assurer que le choix est bon (les choix dispo, bonne écriture, tout en minuscule) \ pas ok
    

    function getHumanChoice(){
        const player = prompt("Rock, paper or scissors");
        return player;
    }
    //test
    //console.log(getHumanChoice());


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,robot){
        player = humanChoice.toLowerCase();

        if (player === robot){
            return "Tie";
        }
        else if (player== "rock"){
            if (robot == "scissors"){
                ++humanScore;
            }
            else{
                ++computerScore;
            }
        }
        else if (player== "paper"){
            if (robot == "rock"){
                ++humanScore;
            }
            else{
                ++computerScore;
            }
        }
        else{
            if (robot == "paper" ){
                ++humanScore;
            }
            else{
                ++computerScore;
            }
        }
    }
   
    choixJoueur = getHumanChoice()
    choixOrdi = getComputerChoice()
playRound(choixJoueur,choixOrdi);
console.log(`HumanScore : ${humanScore}
computerScore : ${computerScore}
choixJoueur : ${choixJoueur}
choixOrdi : ${choixOrdi}`);