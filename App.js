let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
  const options=["rock","paper","scissors"]
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
}
const msg=document.querySelector('#msg')

const showWinner=(userwin,userChoice,compChoice)=>{
  if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win");
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor='green';
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log('you loss');
    msg.innerText=`You loss!Comp ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor='red';
  }
}
const drawGame=()=>{
    console.log("game was draw");
     msg.innerText='Game Was Draw,Play Again';
     msg.style.backgroundColor='black';
}
const playGame=(userChoice)=>{
   console.log("user choice =",userChoice); 
  const compChoice= genCompChoice();
  console.log("comp choice =",compChoice);
  if(userChoice===compChoice){
    drawGame();
  }else{
    let userwin=true;
    if(userChoice==="rock"){
        //scissors,paper
       userwin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock,scissors
      userwin = compChoice==="scissors"?false:true;
    }
    else{
        userwin=compChoice=="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);
  }

}
 choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute('id');  
      playGame(userChoice);
    })
 });