let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let msg = document.querySelector('#msg');
let newBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');

let turn = true;  // Player X - false,  Player O - true

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.dir('box clicked');
        box.innerText = turn ? 'O' : 'X';
        turn = !turn;
        box.disabled = true;

        checkWinner();
    });

});

checkWinner = () => {
    for(let patterns of winPatterns)
    {
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != '')
        {
            if(pos1Val == pos2Val && pos2Val == pos3Val)
            {
               if(pos1Val == 'O')
               {
                msg.innerText = 'Player 1 is the Winner';
               }
               else {
                msg.innerText = 'Player 2 is the Winner';
               }
            }
        }
    }

};