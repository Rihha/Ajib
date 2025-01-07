let navBar = document.querySelector(".navBar")
let navLink = document.querySelector(".navLink")
let navIcons = document.querySelector(".navIcons i")
  

navIcons.addEventListener('click',()=>{
    navLink.classList.toggle('active')
    navIcons.classList.toggle('bx-x')
})


var acc = document.getElementsByClassName("accordin");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;
          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }