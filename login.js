let form = document.getElementById("form");
let inputText = document.getElementById("input");
let inputPassword = document.getElementById("password");
let modal = document.getElementById("modal");
let modalOpen = document.getElementById("modalOpen");
let closeBtn = document.getElementById("closeBtn");

modal.style.display = "none";

let user_email = "user@email.com";
let password = "028";

form.addEventListener("submit", (e) => {
  console.log("form submit");

  e.preventDefault();
  if (inputText.value === user_email && inputPassword.value === password) {
    window.location.href = "/home.html";
  } else if (!inputText.value || !inputPassword.value) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "flex";
  }
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});
