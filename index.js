const btn = document.getElementById("btn");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const modalText = document.querySelector(".modal-text");
const body = document.querySelector("body");


btn.addEventListener("click", (e) => {
    e.stopPropagation()
    modalText.style.display = "block";
})

btnYes.addEventListener("click", () => {
    let age = window.prompt("enter your age")
    if (age >= 18 && age <= 80 ) {
        return alert("congrats!"), modalText.style.display = "none";
    } else {
        return alert("you can't enter website"), modalText.style.display = "none";
    }
})

btnNo.addEventListener("click", () => {
    alert("are you sure you want to leave?");
    modalText.style.display = "none";
})

body.addEventListener("click", () => {
    modalText.style.display = "none";
})
