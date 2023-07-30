const loginFormEl = document.querySelector(".login-form");
const inputMailEl = document.querySelector('input[type="email"]');
const inputPassEl = document.querySelector('input[type="password"]');

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const onFormElements = evt.currentTarget.elements;
  const email = onFormElements.email.value;
  const password = onFormElements.password.value;
  const formData = { email, password };

  if (email === "" || password === "") {
    alert("Required to fill all the fields");
  } else {
    console.log(formData);
  }
}
