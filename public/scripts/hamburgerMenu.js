const btn_open = document.querySelector("header nav ul");
const nav = document.getElementById("navigation");

btn_open.addEventListener("click", () => {
    nav.classList.toggle("active");
})