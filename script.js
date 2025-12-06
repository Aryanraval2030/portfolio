let dot = document.querySelector("#dot")
let cursurX = 0
let cursurY = 0
let dotX = 0
let dotY = 0
let speed = 0.2

document.addEventListener('mousemove', (e) => {
    cursurX = e.clientX;
    cursurY = e.clientY;
});


function animate() {
    dotX += (cursurX - dotX) * speed;
    dotY += (cursurY - dotY) * speed;
    dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    requestAnimationFrame(animate);
}
animate();



let menuBtn = document.querySelector(".menu-btn")
let items = document.querySelector("#items")
let close = document.querySelector("#close")

menuBtn.addEventListener("click", () => {
    items.classList.add("show")
})

close.addEventListener("click", () => {
    items.classList.remove("show")
})