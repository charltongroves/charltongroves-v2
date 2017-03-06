$( document ).ready(function() {
var colors = ["#673AB7", "#E91E63", "#FF5722", "#FFC107", "#9CCC65", "#2196F3"]
var i = 0;
function changeColor()
{
    i=i%6;
    $(".color-change").css("background-color", colors[i]);
    i++;
}

document.getElementById("funSurprise").addEventListener("click", changeColor);
});