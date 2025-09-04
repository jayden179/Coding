
// let userScore = 0;
// let computerScore = 0;
// const userScore_span = document.getElementById("user-score");
// const computerScore_span = document.getElementById("computer-score");
// const scoreboard_div = document.querySelector(".score-board");
// const result_div = document.querySelector(".result");
// const rock_div = document.getElementById("r");
// const paper_div = document.getElementById("p");
// const scissors_div = document.getElementById("s");

// function getComputerChoice() {
//      const choices = ['r', 'p', 's'];
//      const randomNumber = Math.floor(Math.random() * 3);
//      return choices[randomNumber];
//  }

//  function win() {
//     console.log("Win!");
//      userScore++;
//      userScore_span.innerHTML = userScore;
//      computerScore_span.innerHTML = computerScore;
//  }

//  function lose() {
//      console.log("Lost");
//  }

//  function draw() {
//      console.log("DRaw");
//  }

//  function game(userChoice) {
//      const computerChoice = getComputerChoice();
//      switch (userChoice + computerChoice) {
//          case "rs":
//          case "pr":
//          case "sr":
//              win();   
//              break;
//          case "rp":
//          case "ps":
//          case "sr":
//               lose();
//               break;
//          case "rr":
//          case "pp":
//          case "ss":
//              draw();
//              break;

//      }
//  }



//  function main() {

//      rock_div.addEventListener('click', function() {
//          game("r");
//      })

//      paper_div.addEventListener('click', function() {
//          game("p");
//      })

//      scissors_div.addEventListener('click', function() {
//          game("s");
//      })
//  }

// main();

// //video stamp 53:19


let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
     const choices = ['r', 'p', 's'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
 }

 function win(user, computer) {
    console.log("Win!");
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     console.log
     console.log
 }

 function lose() {
     console.log("Lost");
 }

 function draw() {
     console.log("DRaw");
 }

 function game(userChoice) {
     const computerChoice = getComputerChoice();
     switch (userChoice + computerChoice) {
         case "rs":
         case "pr":
         case "sr":
             win(userChoice, computerChoice);   
             break;
         case "rp":
         case "ps":
         case "sr":
              lose(userChoice, computerChoice);
              break;
         case "rr":
         case "pp":
         case "ss":
             draw(userChoice, computerChoice);
             break;

     }
 }



 function main() {

     rock_div.addEventListener('click', function() {
         game("r");
     })

     paper_div.addEventListener('click', function() {
         game("p");
     })

     scissors_div.addEventListener('click', function() {
         game("s");
     })
 }

main();

 //video stamp 53:19


