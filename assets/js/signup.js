var sign_in_btn = document.getElementById("sign_in_btn");
var sign_up_btn = document.getElementById("sign_up_btn");
var container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign_up_mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign_up_mode");
});

function validateForm() {
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    var errorTxt = document.querySelectorAll(".style-span");
    errorTxt.forEach(elem=>{
        // console.log(elem);
        elem.style.display = "none";
    })
  
    // name validation
    var nameErrorMsg = document.getElementById("name-span");
    if (!fullName) {
      nameErrorMsg.innerHTML = "* required";
      nameErrorMsg.style.display = "inline"
      return false;
    }
    if (fullName.length < 8) {
      nameErrorMsg.innerHTML = "* please enter a valid name";
      nameErrorMsg.style.display = "inline"
      return false;
    }
    // email validation
    var emailErrorMsg = document.getElementById("email-span");
    if (!email) {
      emailErrorMsg.innerHTML = "* required";
      emailErrorMsg.style.display = "inline"
      return false;
    }
    if (!emailPattern.test(email)) {
      emailErrorMsg.innerHTML = "* please enter a valid email";
      emailErrorMsg.style.display = "inline"
      return false;
    }
    // password validation
    var passwordErrorMsg = document.getElementById("password-span");
    if (!password) {
      passwordErrorMsg.innerHTML = "* required";
      passwordErrorMsg.style.display = "inline"
      return false;
    }
    if (password.length < 8) {
      passwordErrorMsg.innerHTML = "* please enter a valid password";
      passwordErrorMsg.style.display = "inline"
      return false;
    }
    
    return true; // Allow form submission
  }
  