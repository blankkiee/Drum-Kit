var numberofDrumbtn = document.querySelectorAll(".drum").length;

var i = 0;

while (i < numberofDrumbtn) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
  });

  i++;
}
