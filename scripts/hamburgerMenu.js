const btn_open =  document.getElementById("menuOpen");
const nav = document.getElementById("navigation");
const btn_close = document.getElementById("menuClose");

btn_open.addEventListener("click", () => {
    nav.classList.add("active");
    btn_close.classList.add("active");
})

btn_close.addEventListener("click", () =>{
    nav.classList.remove("active");
    btn_close.classList.remove("active");
})