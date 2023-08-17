document.getElementById("btn-submit").addEventListener("click", function () {
  const emailValue = document.getElementById("user-email");
  const email = emailValue.value;
  const passValue = document.getElementById("user-password");
  const password = passValue.value;
  if (email === "shontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});
