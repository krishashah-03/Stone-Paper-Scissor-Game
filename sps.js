let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscoreval=document.querySelector("#userscore");
const compscoreval=document.querySelector("#compscore");

const gencompChoice=() =>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=() =>{
    console.log("It's a Draw!!");
    msg.innerText=`It's a Draw!!.Play Again...`;
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userscoreval.innerText=userScore;
        console.log("You Win!!");
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscoreval.innerHTML=compScore;
        console.log("Computer Wins!!");
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice) =>{
    console.log("userchoise =",userChoice);
    const compChoice=gencompChoice();
    console.log("compChoise =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if (userChoice==="paper") {
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click" ,() => {
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});