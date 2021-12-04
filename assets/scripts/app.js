const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".nav-links");
const closingBtn = document.querySelector(".fa-times");

bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
});
closingBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar")
});

const caretDown = document.querySelector(".fa-caret-down");
const dropdownItems = document.querySelector(".dropdown-menu-items")
caretDown.addEventListener("click", ()=>{
    dropdownItems.style.display = "flex";
})