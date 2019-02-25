var total=10;
var score=0;

$(document).ready(function() {
  $('#questions').submit(function(event) {
    event.preventDefault();
    function onSubmit(){
      var q1=document.forms["form"]["q"].value;
      var q2=document.forms["form"]["q1"].value;
      var q3=document.forms["form"]["q2"].value;
      var q4=document.forms["form"]["q3"].value;
      var q5=document.forms["form"]["q4"].value;
      var q6=document.forms["form"]["q5"].value;
      var q7=document.forms["form"]["q6"].value;
      var q8=document.forms["form"]["q7"].value;
      var q9=document.forms["form"]["q8"].value;
      var q10=document.forms["form"]["q9"].value;


      for(i=1; i<=total; i++){
    if(eval('q'+i)==null || eval('q'+i)==''){
      alert("plizzzz!!!...answer question "+i)
    }
  }

  var answ=["d","c","a","a","d","a","b","a","b","b"];

    for(i=1; i<=total; i++){
      if(eval('q'+i)==answ[i-1]){
          score++;
      }
    }
    window.alert("You scored "+ score++ );
    var average=((score/total)*100);
    alert(average);

    if(average>=80){
      var out="excellent... you scored "+average+"%";
      document.getElementById("outcomes").innerHTML=out;
    }
    else if (average>=50) {
      var out="thATS FAIR... you scored "+average+"%";
      document.getElementById("outcomes").innerHTML=out;
    }
    else {
      var out="not well done... you scored "+average+"%";
      document.getElementById("outcomes").innerHTML=out;
    }
  }
onSubmit()
});



}));
