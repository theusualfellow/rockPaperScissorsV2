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
    }
    else if( (humanChoice=="rock" && computerChoice == "scissors")||
        (humanChoice=="paper" && computerChoice=="rock")||
        (humanChoice=="scissors"&& computerChoice=="paper")

    ){
        console.log("human won")
    }
    else{
        console.log(computerChoice);

        console.log(humanChoice)
        console.log("you lost");
    }
}



playRound(getHumanChoice(),getComputerChoice());