let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let comScorePara = document.querySelector("#com-score");

const genCompchoice = () =>{
    //rock,paper,scissors;
    const option = ["rock","paper","scissors"];
    return option[Math.floor(Math.random()*3)];
}

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw!!. You play again";
    msg.style.backgroundColor = "#225560";
};

const showwinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
        // console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("you loss!");
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `You loss!! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    // console.log("user choice = ", userChoice);
    //generate computer choice
    const comChoice = genCompchoice();
    // console.log("computer choice = ",comChoice);

    if(comChoice === userChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //scissors , rock
            userWin = comChoice === "rock" ? true : false;
        }
        else{
            //paper , rock
            userWin = comChoice === "rock" ? false : true;
        }
        showwinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})