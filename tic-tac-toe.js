// console.log("tic-tac-toe");
// let turnSound = new Audio("audios/click.mp3");
// let turn = "X"
// let boxes = document.querySelectorAll("#box");
// let msg = document.querySelector(".msg");
// let gameover = false;
// let winnerGif = document.querySelector(".gif");
// let reset = document.querySelector("#reset");

// //change turn
// const changeTurn = () => {
//     return turn === "X" ? "0" : "X";
// }

// //function to disable buttons
// const disableBtn = () => { boxes.forEach((box) => {
//     box.disabled = true;
// });
// }

// //function to reset the game
// const resetGame = () => {
//         boxes.forEach((box) => {
//             box.innerText = "";
//             msg.style.color = "blue";
//             msg.innerText = "Turn for " + turn;
//             winnerGif.style.width = "0px";
//             box.disabled = false;
//         });
//     }
//     reset.addEventListener("click", () => {
//         resetGame();
//     })

// //function to check the winner
// const checkWin = () => {
//     let wins = [
//         [0, 1, 2],
//         [0, 3, 6],
//         [0, 4, 8],
//         [1, 4, 7],
//         [2, 4, 6],
//         [2, 5, 8],
//         [3, 4, 5],
//         [6, 7, 8],
//     ]
//     wins.forEach((e) => {
//         let pos1 = boxes[e[0]].innerText;
//         let pos2 = boxes[e[1]].innerText;
//         let pos3 = boxes[e[2]].innerText;

//         if (pos1 !== "" && pos2 !== "", pos3 !== "") {
//             if (pos1 === pos2 && pos2 === pos3) {
//                 msg.innerText = pos1 + " Won";
//                 gameover = true;
//                 winnerGif.style.width = "200px";
//                 disableBtn();
//             }
//         }
//     })
// }

// //game logic
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (box.innerText === "") {
//             console.log(turn);
//             box.innerText = turn;
//             turnSound.play();
//             if (box.innerText === "X") {
//                 box.style.color = "green";
//                 msg.style.color = "green";
//             } else {
//                 box.style.color = "blue";
//                 msg.style.color = "blue";
//             }
//             checkWin();
//             turn = changeTurn();
//             // changeColor();
//             if (!gameover) {
//                 msg.innerText = "Turn for " + turn;
//             }
//         }
//     });
// });

//Initializing the varriables
console.log("welcome to tic-tac-toe");
let turnSound = new Audio("audios/click.mp3");
let turn = "X";
let boxes = document.querySelectorAll("#box");
let msg = document.querySelector(".msg");
let gameover = false;
let reset = document.querySelector("#reset");
let winnerGif = document.querySelector(".gif");

boxes.forEach((box) => {
    box.innerText = "";
});


//change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//function to disable button
const disableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

//function to reset the game
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        msg.innerText = "Turn for " + turn;
        msg.style.color = "black";
        winnerGif.style.width = "0"
        gameover = false;
    })
}

//function to check the winner
const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ]
    
    wins.forEach((e) => {
        let pos1 = boxes[e[0]].innerText;
        let pos2 = boxes[e[1]].innerText;
        let pos3 = boxes[e[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                gameover = true;
                msg.innerText = turn + " Won";
                winnerGif.style.width = "150px"
                disableBtn();
            }
        }
    });
}

//Handle the click
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turn;
            if (box.innerText === "X") {
                box.style.color = "green";
                msg.style.color = "green";
            } else {
                box.style.color = "blue";
                msg.style.color = "blue";
            }
            turnSound.play();
            checkWin();
            turn = changeTurn();
            if (!gameover) {
                msg.innerText = "Turn for " + turn;
            }
        }
    })
});

//reset 
reset.addEventListener("click", () => {
    resetGame();
})
