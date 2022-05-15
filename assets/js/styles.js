function check_answer() {
  var form_no = document.getElementById()
  var answer = document.forms[0,4];
  var text = '';
  var i;

  for (i=0; i < answer.length; i++) {
    if (answer[i].checked){
      text += answer[i].value
    }
  }
  console.log(text)
}