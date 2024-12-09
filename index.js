let userScore=0;
let compScore=0;

// accessor const variable
const Choices=document.querySelectorAll(".choice");// Choices is an arr of choice div
const Msg=document.querySelector("#msg");// select msg paragraph
const userScorecard=document.querySelector("#user-score");
const compScorecard=document.querySelector("#comp-score");


const gencompChoice= ()=>{//generating comp choice
        const options = ["rock","paper","scissor"];
        let indx=Math.floor(Math.random()*3);
        return options[indx];
}

const drawGame= ()=>{
        Msg.innerText="Game Draw!";
        Msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin , userChoice,compChoice)=>{// show winner and changes on web screen
        if(userWin){
                userScore++;
                Msg.innerText=`You win Your ${userChoice} beats ${compChoice}!`;
                Msg.style.backgroundColor="green";
                userScorecard.innerText=userScore;
        }else{  
                compScore++;
                Msg.innerText=`You Lose ${compChoice} beats your ${userChoice}!`;
                Msg.style.backgroundColor="red";
                compScorecard.innerText=compScore;
        }
}
const playGame = (userChoice) =>{// get user and comp choice and calculte who is winner 
        // it fun control all game
        const compChoice=gencompChoice();
        console.log("comp choice = ",compChoice);
        
        if(userChoice===compChoice){
                //Draw 
                drawGame();
        }else{
                let userWin=true;
                if(userChoice=== "rock"){
                        //scissor paper
                        userWin=compChoice==="paper"?false:true;
                }else if(userChoice==="scissor"){
                        //rock paper
                        userWin=compChoice==="rock"?false:true;
                }else {// paper
                        // rock scissor
                        userWin = compChoice==="scissor"?false:true;
                }
                showWinner(userWin,userChoice,compChoice);
        }
        

};
// game start from here by taking user input first 
Choices.forEach((Choice) =>{//Choice is a parameter of func
Choice.addEventListener("click",()=>{// add event handler funtion
        const userChoice=Choice.getAttribute("id");
        playGame(userChoice);
});
});
