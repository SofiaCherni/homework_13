let langs = document.querySelectorAll('.header-group__item');

langs.forEach(function(lang) {
    lang.addEventListener('click', function() {

        if (lang.classList.contains('active')) {
            return;
        }
        lang.classList.toggle('active');
    });
});

let burger = document.getElementById("burger");
let navbarlist = document.getElementById("navbarList");
let title = document.querySelector('.header-title__heading');
let lock = document.getElementById('lock');

burger.addEventListener("click", function() {
    burger.classList.toggle('active'); 
    navbarlist.classList.toggle('active'); 
    lock.classList.toggle('lock'); 
});

const linkPopup = document.querySelector("#linkpopup");
const popup = document.querySelector("#popup");
const cross = document.querySelector("#cross");

linkPopup.addEventListener('click', function() {
    popup.style.display = "block";
})
cross.addEventListener('click', function() {
    popup.style.display = "none";
})

