const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");

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
    field.parentNode.querySelector("p").className = "disappear";
  } else {
    field.className = "form-control invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    if (e.target.attributes.name.value === "confirmPassword") {
      if (e.target.value === password.value) {
        e.target.className = "form-control valid";
        password.className = "form-control valid";

        password.parentNode.querySelector("p").className = "disappear";
      } else {
        e.target.className = "form-control invalid";
        password.className = "form-control invalid";
      }
    } else if (e.target != password) {
      checkValidate(e.target, patterns[e.target.attributes.name.value]);
    }
  });
});
