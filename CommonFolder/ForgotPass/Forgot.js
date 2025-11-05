let generatedOTP = null;



// 4 changePass
function ChangPass() {
    let EnterEmail = document.getElementById("email").value.trim();
    let newPassword = document.getElementById("newPass").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex(u => u.email === EnterEmail);

    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password updated successfully!");
        // Redirect to homepage without saving in history
        window.location.replace("loginPage.html");
    } else {
        alert("User not found.");
    }
}

// 1 Verify Email
function Verify() {
    let EnterEmail = document.getElementById("email").value.trim();
    let EnterOTP = document.getElementById("otp");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === EnterEmail);

    if (user) {
        EnterOTP.style.display = "block";
        generatOTP();
        document.getElementById("bt1").style.display = "none";
        document.getElementById("bt2").style.display = "block";
        document.getElementById("bt3").style.display = "block";
        return true;
    }
    else {
        alert("Not Avilable! Please creat a new account");
        return false;
    }
}

// 2 Generate OTP
function generatOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    alert("OTP Send")
    document.getElementById("otpNote").innerText = "Your OTP (for demo): " + generatedOTP;
    return true;
    
}
// 3 OTP verification
function verifyOTP() {
    let otp = document.getElementById("otp").value;
    if (otp == generatedOTP) {

        let pass = document.getElementById("newPass");
        pass.style.display = "block";

        
        // document.getElementById("bt1").style.display="none";
        document.getElementById("bt2").style.display = "none";
        document.getElementById("bt3").style.display = "none";
        document.getElementById("bt4").style.display = "block";
        return true;

    } else {
        alert("Invalid OTP ❌");
        return false;
    }
}
