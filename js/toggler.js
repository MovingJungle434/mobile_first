const toggler = document.getElementById("toggler");
const toggler2 = document.getElementById("toggler_nav");
const nav = document.getElementById("nav");
const body = document.body;

toggler.addEventListener("click", () => {
    nav.classList.remove("hide")
    nav.classList.add("show")
    nav.style.display = 'flex'
    body.classList.add("noscroll")
});

toggler2.addEventListener("click", () => {
    nav.classList.remove("show")
    nav.classList.add("hide")

    nav.addEventListener('animationend', () => {
        nav.style.display = 'none'
        body.classList.remove("noscroll");
    }, { once: true })
});
