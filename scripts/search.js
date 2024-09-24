const searchWrap = document.querySelector(".searchWrap");
const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  searchWrap.classList.toggle("active");
  searchBar.classList.toggle("active");
});
