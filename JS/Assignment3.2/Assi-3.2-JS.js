function charFound() {
  var campanyName = "Cybage Software Pvt Ltd";
  var chara = document.getElementById("chara").value;
  console.log(chara);

  var position = campanyName.indexOf(chara);
  if (position === -1) {
    document.getElementById("div1").innerHTML =
      "Char " + chara + " is not found.";
  } else {
    document.getElementById("div1").innerHTML =
      "Char " + chara + " is found at Position " + position + ".";
  }

  var substr = campanyName.substring(0, 16);
  document.getElementById("p1").innerHTML =
    campanyName + " is popularly known as " + substr + ".";
  document.getElementById("p2").innerHTML = campanyName.toLowerCase();
  document.getElementById("p3").innerHTML = campanyName.toUpperCase();
}

function evtListner() {
  var butn = document.getElementById("b1");
  butn.addEventListener("click", () => {
    console.log("Alert !!");
  });
}
