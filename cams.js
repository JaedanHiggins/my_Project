let productcardEl = document.getElementsByTagName("h2");
for (var x = 0; x < productcardEl.length; x++) {
    productcardEl[x].innerHTML = "I feel safe"
}

let bodyEl = document.querySelectorAll("p");
for (var x = 0; x < bodyEl.length; x++) {
    bodyEl[x].classList.remove("bodytext")
}

// let colorEl = document.getElementsByTagName("h1");
// for (var x = 0; colorEl.length; x++) {
//     colorEl[x].style.color = "#ff0000";
// }



let button = document.getElementById("themeToggle");
button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
});

let card = document.querySelector(".product-card");

card.addEventListener("mouseenter", function () {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    card.style.transform = "translateY(-5px)";
});

card.addEventListener("mouseleave", function () {
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
    card.style.transform = "translateY(0px)";
});
