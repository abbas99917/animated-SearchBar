
const searchIcon = document.querySelector(".search-icon")
const magni = document.querySelector(".magnifier")

magni.addEventListener("click",()=>{
    searchIcon.classList.toggle("active")
})