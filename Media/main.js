const izq = document.querySelector(".izq")
const der = document.querySelector(".der")
const slider = document.querySelector(".slider")

izq.addEventListener('click', ()=>{
    slider.scrollLeft -=896
})
der.addEventListener('click', ()=>{
    slider.scrollLeft +=896
})