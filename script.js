let navBar = document.querySelector(".navBar")
let navLink = document.querySelector(".navLink")
let navIcons = document.querySelector(".navIcons i")
  

navIcons.addEventListener('click',()=>{
    navLink.classList.toggle('active')
    navIcons.classList.toggle('bx-x')
})


// window.onscroll=()=>{
//     if(window.scrollY > 60){
//         navBar.style.backgroundColor='black';
//     }
// }
// let search = document.querySelector("#search")
// let input = document.querySelector("#input")
// search.addEventListener('click',()=>{
//     input.classList.toggle('active')
// })