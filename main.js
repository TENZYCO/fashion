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

var countDownDate = new Date("March 25, 2026 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate + now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);

const email = document.getElementById('email')
const form = document.getElementById('form')
const mineElement = document.getElementById('mine')

mine.addEventListener('submit', (e) => {

    if (email.value.length <= 6) {
        messages.push('email must be longer than 6 characters')
    } 

    if (email.value.length >= 20) {
        messages.push('email must be less than 20 characters')
    } 

    if (email.value === 'email'){
        messages.push('email cannot be email')
    }

    if (messages.length > 0) {
        e.preventDefault()
        mineElement.innerText = messages.join(', ')
    }
});
    