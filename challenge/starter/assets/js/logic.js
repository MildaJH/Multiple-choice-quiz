//once press start quiz - desplay a question

/*start the timer going backwards by one second

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  '';

function countdown() {
  var timeLeft = 75;
  timerEl.textContent = timeLeft + " seconds remaining";

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
      timerEl.textContent =" ";
    }
 
  }, 1000);
}

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}
countdown();*/


//if question answered correctly - move to next question, happy sound (IF/ELSE)
//if question answered incorrectly - move to next question plus take off 10 seconds of timer, unhappy sound
// continue looping through all questions until all answered (LOOP)

//once all answered or the timer reaches 0, quiz finishes - display the score 
//and give user an option to save their initals and score

//local storage to store initials and score
//localStorage.setItem('initials', 'score');


//redirect to different link with 
/* name.addEventListener("click", function(){
    window.location.href = [highscores];
})
*/