const posi = document.documentElement;
const swup = new Swup() // const transition entre les pages gràce à la lib swup

posi.addEventListener("mousemove",event => {
    posi.style.setProperty('--x',event.clientX + "px");
    posi.style.setProperty('--y',event.clientY + "px");
})