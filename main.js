const menuBtn = document.querySelector('.menu-click');
const menu = document.querySelector('.menu');
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener('click', () => {
    sidebar.style.left = "-250px";
})

menu.addEventListener('click', () => {
    sidebar.style.left = "0";
})
    


