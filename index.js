// var numberofDrumbtn = document.querySelectorAll(".drum").length;

// var i = 0;

// while (i < numberofDrumbtn) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });

//   i++;
// }

// document.querySelector(".w").addEventListener("click", function () {
//   alert("I got clicked");
// });

var drumNumber = document.querySelectorAll(".drum").length;

// for (i = 0; i < drumNumber; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
// }
var i = 0;

while (i < drumNumber) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
  });

  i++;
}
