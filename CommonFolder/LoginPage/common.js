// const { use } = require("react");


// Logo 
let imgLogo = document.getElementById("imgLogo");
imgLogo.src = "items/logo.jpg";
imgLogo.style.width = "150px";
function checkLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert("Please fill all required fields!");
    return false;
  }

  login(email, password);
  return false; // prevent page reload
}

// store

function login(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert(`Welcome ${user.name}! Role: ${user.role}`);
    if (user.role.toLowerCase() === "faculty") {
      window.location.replace("Faculty.html");
      // after finding user on successful login:
      // localStorage.clear();
      localStorage.setItem("currentUser", JSON.stringify(user));
      // optionally sessionStorage.setItem("currentUserEmail", user.email);
    } else {
      window.location.replace("Student.html");
      // localStorage.clear();
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
  }
  else {
    alert("Invalid Email or Password!");
  }
}



photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;

      // update in localStorage
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      currentUser.photo = e.target.result;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      // also update in full users list
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let idx = users.findIndex(u => u.email === currentUser.email);
      if (idx !== -1) {
        users[idx].photo = e.target.result;
        localStorage.setItem("users", JSON.stringify(users));
      }
    };
    reader.readAsDataURL(file);
  }
});



