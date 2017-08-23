function myFunction() {
  var elem = document.getElementById("login");   
  var pos = -200;
  var id = setInterval(frame, 2);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.right = pos + 'px'; 
    }
  }
}
window.onload = function() {
    var regTab = document.getElementById("regTab");
    regTab.style.borderTop = "solid 3px #337ab7";
    regTab.style.backgroundColor = "#eee";
};
