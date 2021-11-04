let currentBalance = 589.67;

function bankingApp() {
  let userPrompt = prompt("Please make a selection:\n W = Withdrawal from your account\n D = Deposit to your account\n B = Balance of your account\n Q = Quit the page");
 
  switch (userPrompt) {
    case 'W':
    case 'w':
      function withdrawFunds() {
        let withdrawAmount = parseFloat(prompt("Withdraw amount:"));
        currentBalance = currentBalance - withdrawAmount;
        console.log("Withdraw: $" + withdrawAmount + "; New balance: $" + currentBalance);
      }
      withdrawFunds();
      bankingApp()
      break;

    case "D":
    case "d":
      function depositFunds() {
        let depositAmount = Number(prompt("Enter your deposit amount:"));
        currentBalance = currentBalance + depositAmount;
      }
      depositFunds();
      bankingApp()
      break;

    case "B":
    case "b":
      function checkBalance() {
        alert(`Your current balance is $ ${currentBalance}`);
      }
      checkBalance();
      bankingApp()
      break;

    case "Q":
    case "q":
      function quitProgram() {
        let quit = "Quit the program.";
        confirm('Are you sure you want to quit')
      }
      quitProgram();
      break;

    default:
      alert("That is not a valid menu option, please choose again.");
  }
}


