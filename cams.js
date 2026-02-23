let productcardEl = document.getElementsByTagName("h2");
for (var x = 0; x < productcardEl.length; x++) {
    productcardEl[x].innerHTML = "I feel safe"
}

let bodyEl = document.querySelectorAll("p");
for (var x = 0; x < bodyEl.length; x++) {
    bodyEl[x].classList.remove("bodytext")
}

let colorEl = document.getElementsByTagName("h1");
for (var x = 0; colorEl.length; x++) {
    colorEl[x].style.color = "#ff0000";
}
