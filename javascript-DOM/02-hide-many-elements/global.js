window.addEventListener("load", function () { 
const textsToHide = document.querySelectorAll(".hide_me");
const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
  textsToHide.forEach((txt) => {
    txt.style.display = "none";
  });
});



$(document).ready(function () {
  $("#button").click(function () {
    $(".hide_me").hide();
  });
}); })