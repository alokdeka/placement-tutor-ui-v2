// Initialize variables
const sendOtpBtn = document.getElementById("btn_send_otp");
const resendOtpBtn = document.getElementById("resent_otp_btn");
const verifyAndLoginBtn = document.getElementById("verify_and_login_btn");
const otpDiv = document.getElementById("otpDiv");
const roleSelectBox = document.getElementById("role");
const phoneInput = document.getElementById("phone");
const phoneInvalidFeedback = document.getElementById("phoneInvalidFeedback");
const roleSelectBoxInvalidFeedback = document.getElementById(
  "roleInvalidFeedback"
);
const loginForm = document.getElementById("loginForm");

// Send otp event
sendOtpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Clicked");
  // console.log(validate());
  if (validate() === false) {
    return false;
  }
  sendOtpBtn.innerHTML = "Please wait";
  setTimeout(function () {
    otpDiv.classList.remove("d-none");
    sendOtpBtn.classList.add("d-none");
    verifyAndLoginBtn.classList.remove("d-none");
    resendOtpBtn.classList.remove("d-none");
  }, 1000);
});

// Validate befor send otp
validate = () => {
  let result = false;
  // Check role
  if (roleSelectBox.options[roleSelectBox.selectedIndex].value === "") {
    roleSelectBox.classList.add("is-invalid");
    roleSelectBox.focus();
    roleSelectBoxInvalidFeedback.innerHTML = "Please select role";
  } else if (phoneInput.value.length === 0) {
    phoneInput.classList.add("is-invalid");
    phoneInput.focus();
    phoneInvalidFeedback.innerHTML = "Please enter phone number";
  } else {
    phoneInput.classList.remove("is-invalid");
    roleSelectBox.classList.remove("is-invalid");
    result = true;
  }
  return result;
};

// Login form submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login successful");
});
