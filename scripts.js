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
