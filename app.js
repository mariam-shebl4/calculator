// calculator

function insert(num){
     document.formclc.textview.value = document.formclc.textview.value + num;
}

function equal(){
  var exp = document.formclc.textview.value;
  if(exp){
     document.formclc.textview.value = eval(exp)
  }
}

//clear values
    function clean(){
        document.formclc.textview.value = "";
    }

// back button

function back(){
        var exp = document.formclc.textview.value;
        document.formclc.textview.value = exp.substring(0,exp.length-1);
}