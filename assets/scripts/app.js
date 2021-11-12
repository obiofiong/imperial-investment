const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".nav-links");
const closingBtn = document.querySelector(".fa-times");

bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
});
closingBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar")
});

