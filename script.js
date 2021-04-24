function reviewFunction() {
  if (document.getElementById("review").checked) {
    document.getElementById("name").innerHTML = nm.value;
    document.getElementById("position").innerHTML = pos.value;
    document.getElementById("tel").innerHTML = tl.value;
    document.getElementById("mobile").innerHTML = mb.value;
  }
}

function getFunction() {
  if (document.getElementById("get").checked) {
    var e = document.getElementById("htmlcode");
    var content = e.innerHTML;
    alert(content);
  }
}

// function reviewFunction() {
//   if (document.getElementById("nm") != "") {
//     document.getElementById("name").innerHTML = nm.value;
//     document.getElementById("position").innerHTML = pos.value;
//     document.getElementById("tel").innerHTML = tl.value;
//     document.getElementById("mobile").innerHTML = mb.value;
//   }
// }

// var fname = document.getElementById("nm");
// var sname = document.getElementById("name");
// sname.innerHTML = fname;
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
