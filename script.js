    
    //Computer choice 
    
    //Give a random number between 0 and 2
    function randomNumber(){
        let randomNumber = Math.random()*3;
        let randomNumberRounded = Math.floor(randomNumber);
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
// \

    

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


    
   
//     choixJoueur = getHumanChoice()
//     choixOrdi = getComputerChoice()
// playRound(choixJoueur,choixOrdi);
// console.log(`HumanScore : ${humanScore}
// computerScore : ${computerScore}
// choixJoueur : ${choixJoueur}
// choixOrdi : ${choixOrdi}`);

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice,robot){
        console.log(`Player: ${humanChoice}`);
        console.log(`Robot: ${robot}`);
        
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
// function playGame(){
//     const nbOfRounds = 5
//     // for (let rounds = 0; rounds < nbOfRounds;rounds++){
//     // playRound(getHumanChoice(),getComputerChoice());
//     // console.log(`round ${rounds + 1}`);
//     // console.log(`humanScore: ${humanScore} 
//     // computerScore: ${computerScore}`);
//     // }




// }

let scoreJoueur = document.querySelector(".score-joueur");
let scoreOrdi = document.querySelector(".score-ordi");

scoreJoueur.textContent = `Score: ${humanScore}`;
scoreOrdi.textContent = `Score: ${computerScore}`;


let choixJoueur = document.querySelector(".choix-joueur");
let choixOrdi = document.querySelector(".choix-ordi");

choixJoueur.textContent = "Waiting";
choixOrdi.textContent = "Waiting";

let btn = document.querySelector(".boutons");
btn.addEventListener("click",function(e){
    //Round
    
    if (humanScore == 5 || computerScore== 5){
        let winner = document.createElement("div");
        // document.querySelector(".endGame").appendChild(winner);
        if (humanScore >= 5){
             winner.textContent = "You win";
        }
        else{
            winner.textContent = "You lost";
        }
        humanScore= 0;
        computerScore = 0;
    }
    else{
    
        
        
        
    let computerChoice =getComputerChoice()
    playRound(e.target.textContent,computerChoice );
    //Maj de score
    scoreJoueur.textContent = `Score: ${humanScore}`;
    scoreOrdi.textContent = `Score: ${computerScore}`;

    ///Afficher ce qui a été jouer 

    choixJoueur.textContent = e.target.textContent;
    choixOrdi.textContent = computerChoice;
    ///
    console.log(humanScore);
    console.log(computerScore);
    }
})
// La fonction callback sera playRound(le contenu du bouton appuyé e.target,la fonction du robot)
//Mettre à jour l'affichage des scores 
//
