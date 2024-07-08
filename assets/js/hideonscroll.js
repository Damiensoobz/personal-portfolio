var pos1 = window.pageYOffset;
window.onscroll = function() {
var pos2 = window.pageYOffset;
  if (pos1 > pos2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  pos1 = pos2;
}