const btn = document.getElementById("menu")
const sidebar = document.querySelector("#sidebar")
const searchBar = document.querySelector(".bx-search");



btn.onclick = function () {
    if(sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
    }
    else {
        sidebar.classList.toggle("active")
    }
}