const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("myForm");

//
const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^[0-9]{10}$/,
  name: /^[a-z ]{1,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]+)$/,
  password: /^[\w@-]{8,20}$/, // w is a meta character used to identify number letter and under score
  confirmPassword: /^[\w@-]{8,20}$/,
};

// add listener

function checkValidate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "form-control valid";
  } else {
    field.className = "form-control invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    if (e.target.attributes.name.value === "confirmPassword") {
      console.log(100);
      if (e.target.value === password.value) {
        e.target.className = "form-control valid";
        password.className = "form-control valid";
      } else {
        e.target.className = "form-control invalid";
      }
    } else if (e.target != password) {
      checkValidate(e.target, patterns[e.target.attributes.name.value]);
    }
  });
});

submit.addEventListener("submit", (event) => {
  event.preventDefault();
});
