const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropmenu = document.querySelector('.dropdown')
const head = document.querySelector('.sidebar')

toggleBtn.onclick = function () {
    dropmenu.classList.toggle('open')
    const isopen = dropmenu.classList.contains('open') 

    toggleBtnIcon.classList = isopen
    '<i class="fa-solid fa-bars"></i>'
    '<i class="fa-solid fa-x"></i>'
}

// const head = document.querySelector('.sidebar')
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    dropmenu.classList.toggle('open')
}  