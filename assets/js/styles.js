// computes the score
function onSubmit () {
  var score = 0;
  var noOfQuestions = 5;
  var answersArray = ['B', 'C', 'D', 'A', 'B'];

  var q1 = document.forms ['quiz'] ['q1'].value;
  var q2 = document.forms ['quiz'] ['q2'].value;
  var q3 = document.forms ['quiz'] ['q3'].value;
  var q4 = document.forms ['quiz'] ['q4'].value;
  var q5 = document.forms ['quiz'] ['q5'].value;

  for (var i = 1; i <= noOfQuestions; i++) {
    if (eval( 'q' + i) == answersArray[i - 1]) {
      score++;
    }   
  }
  calcPercentage(score)
}

// calculates percentage user scored
function calcPercentage (score) {
  var percentage = (score/5) * 100;
  
  var result = document.getElementById('results');

  if (percentage >= 80) {
  result.innerHTML =`<h2>You scored ${percentage}% you passed excellently.</h2>`
  }
  else if (percentage >= 50 && percentage < 80) {
    result.innerHTML = `<h2>You scored ${percentage}% you passed fairly.</h2>`
  }
  else {
    result.innerHTML = `<h2>You scored ${percentage}% you scored poorly. You need to retake the test</h2>`
  }
  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}