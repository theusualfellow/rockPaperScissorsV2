let humanScore=0, computerScore = 0;

function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    return(options[Math.floor(Math.random()*3)])
}

function getHumanChoice(){
    let humanChoice = prompt("enter your choice");
    return humanChoice;
}


function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
        console.log("its a tie")
        console.log("player: " + humanScore)
        console.log("computer: " + computerScore) 
    }
    else if( (humanChoice=="rock" && computerChoice == "scissors")||
        (humanChoice=="paper" && computerChoice=="rock")||
        (humanChoice=="scissors"&& computerChoice=="paper")

    ){
        console.log("you won")
        humanScore++;
        console.log("player: " + humanScore)
        console.log("computer: " + computerScore)    }
    else{

        console.log("you lost");
        computerScore++;
        console.log("player: " + humanScore)
        console.log("computer: " + computerScore)
    }
}

function playGame(){
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
if(humanScore==computerScore){
    console.log("the game is tied");
}
else if(humanScore>computerScore){
    console.log("human won the game");
}
else{
    console.log("computer won the game");
}

}
playGame();
