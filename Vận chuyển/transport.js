const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})


function abc() {
  confirm("Cảm ơn bạn đã đóng góp ý kiến!");
}