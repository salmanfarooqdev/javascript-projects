 //rock paper sxiessors
 let buttons = document.querySelectorAll('.btn');
 let result = document.querySelector('.result');
 let playerMove="";
 let computerMove="";
 let playerScore = document.querySelector('.playerscore');
 let computerScore = document.querySelector('.computerscore');

 let reset = document.querySelector('.pa');
 

 let pscore =0;
 let cscore =0;

 let roundsPlayed = 0;
 let maxRounds =5;

 buttons.forEach(function(button)
 {
    button.addEventListener('click',playGame);
 });


 
function playGame(e)
{
    if(roundsPlayed < maxRounds)
    {
        playerMove = e.target.innerText.toLowerCase();
        computerMove = getComputerChoice();
        playRound(playerMove, computerMove);
        
        roundsPlayed++;

        if(roundsPlayed === maxRounds)
        {
            determineWinner();
        }
    }
    

}

function determineWinner()
{
    if(pscore === cscore )
    {
        result.innerHTML = 'This Game was a Tie!!';
    }
    else if(pscore > cscore)
    {
        result.innerHTML = 'You Won the Game!!';
    }
    else if(pscore < cscore)
    {
        result.innerHTML = 'You Lost the Game!!';
    }
}




 function getComputerChoice()
 {
  let num = Math.floor(Math.random() * 3);
  if(num === 0)
  {
      return 'rock';
  }
  else if(num === 1)
  {
      return 'paper';
  }
  else if(num === 2)
  {
      return 'scissor';
  }
  return -1;

 }

 function updateScore(choice)
 {
    if(choice === 1)
    {
        pscore++;
        playerScore.innerHTML = pscore;
    }
    else if(choice === 0)
    {
        cscore++;
        computerScore.innerHTML = cscore;
    }

 }

 
 function playRound(PlayerSelection, ComputerSelection)
 {
       let compChoice = ComputerSelection;
       let res = "";
       if(PlayerSelection === compChoice)
       {
          res = 'its a draw ';
       }
       else if((PlayerSelection === 'rock' && compChoice === 'scissor') ||
       (PlayerSelection === 'paper' && compChoice === 'rock') ||
       (PlayerSelection === 'scissor' && compChoice === 'paper'))
       {
          res = 'you won ';
       }
       else{
          res = 'you lost ';
       }

       if(res === 'its a draw ')
       {
        result.innerHTML = 'its a Tie';
        roundsPlayed--;
       }
       else if(res === 'you won ')
       {
        
        result.innerHTML = res + `, ${PlayerSelection} beats ${compChoice}`;
        updateScore(1);
       }
       else if(res === 'you lost ')
       {
        result.innerHTML = res + `, ${compChoice} beats  ${PlayerSelection}`;
        updateScore(0);
       }
      
       

      
 }

 reset.addEventListener('click', function()
 {
    pscore = 0;
    cscore =0;
    roundsPlayed = 0;
    result.innerHTML = "";
    playerScore.innerHTML="";
    computerScore.innerHTML="";
 })
