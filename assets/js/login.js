// Initialize variables
const sendOtpBtn = document.getElementById("btn_send_otp");
const verifyAndLoginBtn = document.getElementById("varify_and_login_btn");
const otpDiv = document.getElementById("otpDiv");
const phoneInput = document.getElementById("phone");
const phoneInvalidFeedback = document.getElementById("phoneInvalidFeedback");
const loginForm = document.getElementById("loginForm");

// Send otp event
sendOtpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Clicked");
  console.log(validate());
  if (validate() === false) {
    return false;
  }
  sendOtpBtn.innerHTML = "Please wait";
  setTimeout(function () {
    otpDiv.classList.remove("d-none");
    sendOtpBtn.classList.add("d-none");
    verifyAndLoginBtn.classList.remove("d-none");
  }, 1000);
});

// Validate befor send otp
validate = () => {
  let result = false;
  if (phoneInput.value.length === 0) {
    phoneInput.classList.add("is-invalid");
    phoneInput.focus();
    phoneInvalidFeedback.innerHTML = "Please enter phone number";
  } else {
    phoneInput.classList.remove("is-invalid");
    result = true;
  }
  return result;
};

// Login form submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login successful");
});
