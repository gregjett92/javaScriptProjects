/*
===========================================
features to add:

make into platform
-input boxes
-submit button

add color and design


Win/lose/tie animation, picture

============================================
  */

  
 const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
     return userInput;
   } 
   else{
     console.log('Error!')
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = 
  Math.floor(Math.random() * 3 );
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  } 
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
      return 'You destroyed your opponent! Congrats';
    }
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } 
    if (userChoice === 'rock' ){
      if(computerChoice === 'paper'){
        return "Computer Wins!!!"
    } else {
        "User Wins!!!";
      }
    }
    
    if (userChoice === 'paper' ){
      if(computerChoice === 'scissors'){
        return "Computer Wins!!!"
    } else {
        "User Wins!!!";
      }
    }
    
     if (userChoice === 'scissors' ){
      if(computerChoice === 'rock'){
        return "Computer Wins!!!"
    } else {
        "User Wins!!!";
      }
    }
  }
  
  const playGame = () =>{
    const userChoice =
  getUserChoice('rock');
    const computerChoice =
  getComputerChoice();
    console.log("Your choice is: " + 
  userChoice);
    console.log("The computer choice is: " + 
  computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
