const submitButton = document.querySelector(".submit");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const inputs = document.querySelectorAll("input");
const form = document.querySelector(".form");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputs);
  //   all true
  inputs.forEach((input) => {
    if (!input.validity.valid || !input.value) {
      input.classList.add("outline-[#FF7A7A]");
      input.classList.add("text-[#FF7A7A]");
      input.closest("div").querySelector("img").classList.remove("hidden");
      input.closest("div").querySelector("p").classList.remove("hidden");
    }
  });
});
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    input.classList.remove("outline-[#FF7A7A]");
    input.classList.remove("text-[#FF7A7A]");
    input.closest("div").querySelector("img").classList.add("hidden");
    input.closest("div").querySelector("p").classList.add("hidden");
  });
});
