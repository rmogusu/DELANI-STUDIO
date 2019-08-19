$(document).ready(function() {
  $(".design1").click(function() {
  $("#clickable").fadeOut(20000);
  $("#info3").show(20000);
});
$(".design2").click(function() {
  $("#clickable").fadeIn(20000);
  $("#info3").hide(20000);
});

$(".dev").click(function() {
    $("#clickable1").slideToggle(2000);
    $("#info4").slideToggle(2000);
  });

$(".mgnt").click(function() {
    $("#clickable2").slideToggle(2000);
    $("#info5").slideToggle(2000);
  });
});


function contact(form){
        var name = document.forms["form1"]["yourname"].value;
            var email = document.forms["form1"]["youremail"].value;
            var message = document.forms["form1"]["message"].value;
            alert("Hello " + name + "," + "  Thank you for reaching out to us.feel free anytime. ");
          };
