let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
     const choices = ['r', 'p', 's'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
 }

 function convertToWord(Letter) {
    if (Letter === "r") return "rock";
    if (Letter === "p") return "paper";
    return "scissors";
 }

 function win(userChoice, computerChoice) {
    const smallUserWord = '<sub><span style="font-size: smaller;">user</span></sub>';
    const smallCompWord = '<sub><span style="font-size: smaller;">comp</span></sub>';
    const userChoice_div = document.getElementById(userChoice);
    console.log("Win!");
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . you win 🔥`
     userChoice_div.classList.add('green-glow')
     setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
 }

 function lose(userChoice, computerChoice) {
     const smallUserWord = '<sub><span style="font-size: smaller;">user</span></sub>';
     const smallCompWord = '<sub><span style="font-size: smaller;">comp</span></sub>';
     const userChoice_div = document.getElementById(userChoice);
     console.log("Lost");
     computerScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . you lost 😭`
     userChoice_div.classList.add('red-glow')
     setTimeout(() =>  userChoice_div.classList.remove('red-glow'), 1000);
 }

 function draw(userChoice, computerChoice) {
     const smallUserWord = '<sub><span style="font-size: smaller;">user</span></sub>';
     const smallCompWord = '<sub><span style="font-size: smaller;">comp</span></sub>';
     const userChoice_div = document.getElementById(userChoice);
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallCompWord} . Its a draw 😑`
     userChoice_div.classList.add('gray-glow')
     setTimeout(() => userChoice_div.classList.remove('gray-glow') , 1000);
 }

 function game(userChoice) {
     const computerChoice = getComputerChoice();
     switch (userChoice + computerChoice) {
         case "rs":
         case "pr":
         case "sp":
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

     rock_div.addEventListener('click', () => game("r"));
     paper_div.addEventListener('click', () => game("p"))
     scissors_div.addEventListener('click', () => game("s"))
 }

main();