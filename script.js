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
      console.log(100);
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

// SUBMISSION PART
// function sendMail() {
//   console.log(1000);
// emailjs.send("service_gnfht1q", "template_qo5vzdg", {
//   name_send: document.getElementById("name").value,
//   phone_send: document.getElementById("phone").value,
//   email_send: document.getElementById("email").value,
// });
//
// }
// SMTP JS

// Password: "pxlgglialcrlltrk"
// var submit = document.getElementById("submit");
// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   var nameSend = document.getElementById("name").value;
//   var emailSend = document.getElementById("email").value;
//   var phoneSend = document.getElementById("phone").value;
//   var body =
//     "name: " +
//     nameSend +
//     "<br/> email: " +
//     emailSend +
//     "<br/> phone " +
//     phoneSend;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "nanduttanvsabhi@gmail.com",
//     Password: "553B6E3E8BDA288DC2C427BD81576DAF03F4",
//     To: "nanduttanvsabhi@gmail.com",
//     From: emailSend,
//     Subject: "This is the subject",
//     Body: body,
//   }).then((message) => alert(message));
// });
