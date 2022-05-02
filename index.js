// const mode = document.querySelector(".theme-mode");
// const main = document.querySelector("main");

// main.classList.add(localStorage.getItem("theme"));

// mode.addEventListener("click", () => {
// 	const currentTheme = localStorage.getItem("theme");
// 	main.classList.toggle("dark-mode");
// 	currentTheme === "light"
// 		? localStorage.setItem("theme", "dark-mode")
// 		: localStorage.setItem("theme", "light-mode");
// });

const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const lightMode = document.querySelector(".light-mode");
const nigthMode = document.querySelector(".dark-mode");

body.classList = localStorage.getItem("theme") || "light";
lightMode.style.display === "light"
	? (nigthMode.style.display = "block")
	: (lightMode.style.display = "block");

toggle.addEventListener("click", (e) => {
	if (body.classList[0] === "light") {
		body.classList = "dark";
		localStorage.setItem("theme", "dark");
		lightMode.style.display = "block";
		nigthMode.style.display = "none";
		// console.log(nigthMode.style);
		// console.log(e);
	} else {
		body.classList = "light";
		localStorage.setItem("theme", "light");

		lightMode.style.display = "none";
		nigthMode.style.display = "block";
		// console.log(lightMode.style);
	}
	// localStorage.getItem("theme") =
	console.log(body.classList);
});
