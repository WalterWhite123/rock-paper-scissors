    
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
    console.log(getHumanChoice());

   
