let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").classList.add("active");
  } else {
    document.getElementById("navbar").classList.remove("active");
  }
  prevScrollPos = currentScrollPos;
}