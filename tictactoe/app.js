const Player = (sign)=>{
    this.sign = sign;

    const getSign =()=>{
        return sign;
    };

    return{getSign};
};

const gameboard = (() =>{

    let board = ['', '','','','','','','',''];
   
    //set field
    const setField = (index, sign) =>{
        board[index] = sign;
    };
    //get field
    const getField = (index) =>{
        return board[index];
    };
    //reset
    const resetboard = ()=>{
        for(let i=0; i< board.length; i++)
        {
            board[i]="";
        }
    };
    return {setField, getField, resetboard,board};
})();

// gamecontroller
const gameController = (()=>{
    let turnDisplay = document.querySelector('.turnDisplay');

    let playerX = Player('X');
    let playerY = Player('O');
    let round = 1;
    let end = false;

    const getPlayer = ()=>{
        if(round % 2 === 0)
        {
            round++;
            return playerY.getSign();
        }
        else{
            round++;
            return playerX.getSign();
        }
   };

   const checkDraw = (cplayer) =>{
        if(round === 10 && checkWin(cplayer) !== true)
        {
            return true;
        }
        return false;
   };
   const checkWin = (currentPlayer)=>{
    let winningConditions = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    for(condition of winningConditions)
    {
        const [a,b,c] = condition;

        if(gameboard.getField(a) === currentPlayer &&
            gameboard.getField(b) === currentPlayer &&
            gameboard.getField(c) === currentPlayer)
            {
                end = true;
                return true;
            } 
    }
    return false;
   };

   const reset = () => {
    round =1;
    end = false;
    turnDisplay.innerHTML = `Player X Turn`;
    gameboard.resetboard();
    displayController.displayReset();
   };
   const endGame = ()=>{
    return end;
   
   };
    return{ getPlayer, checkWin, endGame, checkDraw, end, reset};
})();


//display controller
const displayController = (()=>{

    let playboard = document.querySelector('.gameboard');
    let turnDisplay = document.querySelector('.turnDisplay');
    let boxes = document.querySelectorAll('.box');
    let restartbtn = document.querySelector('.restart');

    let currentPlayer = "X";
    let toggle = false;

    const displayScreen = (currentPlayer, value)=>{
        if(toggle)
        {
            turnDisplay.innerHTML = `Player X Turn`;
            toggle = false;
        }
        else{
            turnDisplay.innerHTML = `Player O Turn`;
            toggle = true;
        }
    };

    boxes.forEach(function(box)
    {
        box.addEventListener('click', function(e)
        {
            if(box.innerHTML === '' && gameController.endGame() === false)
            {
                currentPlayer = gameController.getPlayer();
                box.innerHTML = currentPlayer // also toggles
                let index = e.target.dataset.index;
                gameboard.setField(index, currentPlayer);
                //show on screen
                displayScreen();    
                //checkwin
                if(gameController.checkWin(currentPlayer) === true)
                {
                    turnDisplay.innerHTML = `${currentPlayer} Won!`;
                    console.log(currentPlayer);
                }
                //check draw
                if(gameController.checkDraw(currentPlayer) === true)
                {
                    gameController.end = true;
                    turnDisplay.innerHTML = `Its a Draw!`;
                } 
            }
        });
    });

    restartbtn.addEventListener('click', function()
    {
        gameController.reset();
    });
    
    const displayReset=()=>{
        boxes.forEach(function(box)
        {
            box.innerHTML="";
        });
    };

    return{displayReset};
})();

