function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    console.log(options[Math.floor(Math.random()*3)])
}

function getHumanChoice(){
    let humanChoice = prompt("enter your choice");
    return humanChoice;
}
console.log(getHumanChoice());