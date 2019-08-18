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

// $(document).ready(function() {
//   $('.port1').mouseover(function() {
//     $('.text1').show();
//   }).mouseout(function() {
//     $('.text1').hide();
//   });
//
//   $('.port2').mouseover(function() {
//     $('.text2').show();
//   }).mouseout(function() {
//     $('.text2').hide();
//   });
//
// });
//
//
// $(document).ready(function() {
//
//   $('.port1').mouseover(function () {
//       $('.text1').show();
//   }).mouseout(function () {
//       $('.text1').hide();
//   });
//
//   $('.port2').mouseover(function () {
//     $('.text2').show();
// }).mouseout(function () {
//     $('.text2').hide();
// });
//
// $('.port3').mouseover(function () {
//     $('.text3').show();
// }).mouseout(function () {
//     $('.text3').hide();
// });
//
// $('.port4').mouseover(function () {
//     $('.text4').show();
// }).mouseout(function () {
//     $('.text4').hide();
// });
//
// $('.port5').mouseover(function () {
//     $('.text5').show();
// }).mouseout(function () {
//     $('.text5').hide();
// });
// $('.port6').mouseover(function () {
//     $('.text6').show();
// }).mouseout(function () {
//     $('.text6').hide();
// });
// $('.port7').mouseover(function () {
//     $('.text7').show();
// }).mouseout(function () {
//     $('.text7').hide();
// });
// $('.port8').mouseover(function () {
//     $('.text8').show();
// }).mouseout(function () {
//     $('.text8').hide();
// });
//
// });


function contact(form){
        var name = document.forms["form1"]["yourname"].value;
            var email = document.forms["form1"]["youremail"].value;
            var message = document.forms["form1"]["message"].value;
            alert("Hello " + name + "," + "  Thank you for reaching out to us.feel free anytime. ");
          };
