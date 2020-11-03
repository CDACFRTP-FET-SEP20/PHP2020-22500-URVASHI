function cal() {
  p = document.getElementById("p").value;
  n = document.getElementById("n").value;
  t = document.getElementById("t").value;
  r = document.getElementById("r").value;
  result = document.getElementById("result");

  A = p * Math.pow(1 + r / (n * 100), n * t);

  result.innerHTML = "The total amount is " + A.toFixed(2);

  result.innerHTML += "<br> The intrest is " + (A.toFixed(2) - p).toFixed(2);
}
