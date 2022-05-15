// function check_answer() {
//   var answer = document.forms[0];
//   var text = '';
//   var i;

//   for (i=0; i < answer.length; i++) {
//     if (answer[i].checked){
//       text += answer[i].value
//     }
//   }
//   console.log(text)
// }

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
  calc_percentage(score)
}
function calc_percentage (score) {
  var result = (score/5) * 100;
  alert (result)
}