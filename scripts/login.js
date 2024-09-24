const signUpBtn = document.getElementById("signUp");
const SignInBtn = document.getElementById("signIn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

SignInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
