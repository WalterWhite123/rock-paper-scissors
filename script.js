    //Give a random number between 0 and 2
    
    
    function randomNumber(){
        let randomNumber = Math.random()*2;
        let randomNumberRounded = Math.round(randomNumber);
        return randomNumberRounded;
    }
    
    
    function getComputerChoice(){
        let computerChoice;
        switch (randomNumber()){
            case 0: 
                computerChoice = "Rock";
                break;
            case 1:
                computerChoice = "Paper";
                break;
            case 2:
                computerChoice = "Scissors";
                break;
    } 
    return computerChoice;
    }

    console.log(getComputerChoice());