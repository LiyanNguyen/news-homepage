let mobileMenu = document.querySelector("#mobileMenu");
let blackLayer = document.querySelector(".blackLayer");
let mobileSideBar = document.querySelector(".mobileSideBar");
let closeMobileMenu = document.querySelector("#closeMobileMenu");


mobileMenu.onclick = () => {
	blackLayer.classList.add("active");
	mobileSideBar.classList.add("active");
}

let closeSideBar = () => {
	mobileSideBar.classList.remove("active");
  blackLayer.classList.remove("active");
}

closeMobileMenu.addEventListener("click", closeSideBar);
blackLayer.addEventListener("click", closeSideBar);