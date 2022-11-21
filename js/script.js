let getUserName = document.querySelector('#enter-username-btn');
getUserName.addEventListener('click', showUserName);

let userPointsCounter = 0;
let computerPointsCounter = 0;

let userPoints = document.querySelector('#user-points');
userPoints.innerText = `Dina poäng: ${userPointsCounter}`;
userPoints.style.visibility = 'visible';

let computerPoints = document.querySelector('#computer-points');
computerPoints.innerText = `Datorns poäng: ${computerPointsCounter}`;
computerPoints.style.visibility = 'visible';

const userChoice = document.querySelectorAll('#choice-btn');
for(let i=0; i<userChoice.length; i++){
    userChoice[i].addEventListener('click', generateGame);
}

let showComputerChoice = document.querySelector('#computer-choice');

let roundCounter = document.querySelector('#round-counter');

const restartBtn = document.querySelector('#restart-btn');
restartBtn.style.visibility = 'hidden';


restartBtn.addEventListener('click', restartGame);



function showUserName(event){
    event.preventDefault();
    let input = document.querySelector('#username-input');
    let userName = document.querySelector('#username');
    userName.innerText = `Klicka på ditt val, ${input.value}`;
    input.value = '';
}

function generateGame(event){
    event.preventDefault();

    let computerChoice = Math.round(Math.random() * 2);
   
    if(computerChoice == 0){
        showComputerChoice.src = "./img/sten.png";
        showComputerChoice.style.visibility = 'hidden';
    }
    else if(computerChoice == 1){
        showComputerChoice.src = "./img/sax.png";
        showComputerChoice.style.visibility = 'hidden';
    }
    else{
        showComputerChoice.src = "./img/pase.png";
        showComputerChoice.style.visibility = 'hidden';
    }

    if(event.target == userChoice[0] && computerChoice == 0 || event.target == userChoice[1] && computerChoice == 1 || event.target == userChoice[2] && computerChoice == 2){
        roundCounter.innerText = 'Oavgjort!';
        showComputerChoice.style.visibility = 'visible';
    }
    
    else if(event.target == userChoice[0] && computerChoice == 1 || event.target == userChoice[1] && computerChoice == 2 || event.target == userChoice[2] && computerChoice == 0){
        userPointsCounter++;
        showComputerChoice.style.visibility = 'visible';
        userPoints.innerText = `Dina poäng: ${userPointsCounter}`;
        roundCounter.innerText = 'Du vinner!';
        if(userPointsCounter == 3){
            userPoints.style.visibility = 'hidden';
            computerPoints.style.visibility = 'hidden';
            roundCounter.innerText = `Du vinner matchen!! ${userPointsCounter} : ${computerPointsCounter}`;
            restartBtn.style.visibility = 'visible';       
        }
    }

    else if(event.target == userChoice[0] && computerChoice == 2 || event.target == userChoice[1] && computerChoice == 0 || event.target == userChoice[2] && computerChoice == 1){
        computerPointsCounter++;
        showComputerChoice.style.visibility = 'visible';
        computerPoints.innerText = `Datorns poäng: ${computerPointsCounter}`;
        roundCounter.innerText = 'Datorn vinner!';
        if(computerPointsCounter == 3){
            userPoints.style.visibility = 'hidden';
            computerPoints.style.visibility = 'hidden';
            roundCounter.innerText = `Datorn vinner matchen!! ${computerPointsCounter} : ${userPointsCounter}`;
            restartBtn.style.visibility = 'visible';         
        }
    }
}

function restartGame(e){
    e.preventDefault();

    roundCounter.innerText = '';
    userPointsCounter = 0;
    computerPointsCounter = 0;

    userPoints.innerText = `Dina poäng: ${userPointsCounter}`;
    computerPoints.innerText = `Datorns poäng: ${computerPointsCounter}`;
    
    showComputerChoice.style.visibility = 'hidden';
    restartBtn.style.visibility = 'hidden';

    userPoints.style.visibility = 'visible';
    computerPoints.style.visibility = 'visible';
}
