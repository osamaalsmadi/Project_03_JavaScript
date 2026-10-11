let counterText = document.getElementById("counter");
let btnIncrease = document.getElementById("btnIncrease");
let btnDecrease = document.getElementById("btnDecrease");
let btnReset = document.getElementById("btnReset");

let count = 0; 

btnIncrease.addEventListener("click", function() {
    count++; 
    counterText.textContent = count; 
    
    if (count > 0) {
        counterText.style.color = "green";
    } else if (count < 0) {
        counterText.style.color = "red";
    } else {
        counterText.style.color = "black";
    }
});

btnDecrease.addEventListener("click", function() {
    count--; 
    counterText.textContent = count; 
    
    if (count > 0) {
        counterText.style.color = "green";
    } else if (count < 0) {
        counterText.style.color = "red";
    } else {
        counterText.style.color = "black";
    }
});

btnReset.addEventListener("click", function() {
    count = 0;
    counterText.textContent = count; 
    counterText.style.color = "black"; 
});
