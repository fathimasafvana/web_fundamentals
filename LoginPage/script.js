
function validateLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let valid = true;

    // Email validation
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent =
            "Invalid email";

        valid = false;
    }
    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Minimum 6 characters";

        valid = false;
    }
    // Login successful
    if (valid) {
        alert("Login successful");
    }
    return false;
}
// Show / Hide Password
function togglepassword() {
    let pass = document.getElementById("password");
    pass.type = pass.type == "password" ? "text" : "password";
}
// Show OTP
function showOTP() {
    document.getElementById("otpbox").classList.remove("hidden");
}

function verifyOTP(){
    let otp = document.getElementById("otp").value;

    if(otp === "123456"){
        alert("OTP verified");
    }else{
        alert("Invalid OTP");
        

    }  

}
function toggleTheme(){
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light")
}

