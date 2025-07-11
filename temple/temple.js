
document.getElementById("year").textContent = new Date().getFullYear();


document.getElementById("modified").textContent = document.lastModified;


document.getElementById("menuBtn").addEventListener("click", function () {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
});