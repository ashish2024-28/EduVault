// localStorage.clear();

let user1 = {
  name: "Ashish Kumar",
  photo: "items/img/Myimg.jpg",
  email: "ashishkumar.bcse2024@huroorkee.ac.in",
  password: "ashish",
  university: "Haridwar University",
  course: "B.tech",
  branch: "CSE",
  batch: "2024-28",
  role: "student"
}
saveUser(user1);

let user2 = {
  name: "Aryan Raj",
  photo: "items/img/Aryan.jpg",
  email: "aryan1.bcse2024@huroorkee.ac.in",
  password: "aryan",
  university: "Haridwar University",
  course: "B.tech",
  branch: "CSE",
  batch: "2024-28",
  role: "student"

}
saveUser(user2);

let user3 = {
  name: "Abhay Tiwari",
  photo: "items/img/Abhay.jpg",
  email: "abhaytiwari.bcse2024@huroorkee.ac.in",
  password: "abhay",
  university: "Haridwar University",
  course: "B.tech",
  branch: "CSE",
  batch: "2024-28",
  role: "student"

}
saveUser(user3);

let user4 = {
  name: "Khushi",
  photo: "items/img/khushi.jpg",
  email: "khushi.bcse2024@huroorkee.ac.in",
  password: "khushi",
  university: "Haridwar University",
  course: "B.tech",
  branch: "CSE",
  batch: "2024-28",
  role: "student"

}
saveUser(user4);

let user5 = {
  name: "Arpna Chaudhari",
  photo: "items/img/arpna.jpg",
  email: "arpna.bcse2024@huroorkee.ac.in",
  password: "arpna",
  university: "Haridwar University",
  course: "B.tech",
  branch: "CSE",
  batch: "2024-28",
  role: "student"

}
saveUser(user5);

let user6 = {
  name: "Dev Singh",
  photo: "items/img/dev.jpg",
  email: "devsingh.bcse2024@huroorkee.ac.in",
  password: "DevSingh",
  university: "Haridwar University",
  course: "B.tech",
  branch: "CSE",
  batch: "2024-28",
  role: "student"

}
saveUser(user6);



//  faculty data
let userf1 = {
  name: "Aadesh Arya",
  photo: "items/img/aadesh.jpg",
  email: "adeshkarya.@huroorkee.ac.in",
  password: "adesh",
  university: "Haridwar University",
  role: "faculty"
}
saveUser(userf1);

let userf2 = {
  name: "Ravindra Arya",
  photo: "items/img/arya.jpg",
  email: "ravindarya.@huroorkee.ac.in",
  password: "ravindra",
  university: "Haridwar University",
  role: "faculty"
}
saveUser(userf2);


// fuction to save data and check
function saveUser(user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Fix duplicate check (case-insensitive)
  if (users.some(u => u.email.toLowerCase() === user.email.toLowerCase())) {
    return;
  }

  // Default role if missing
  if (!user.role) {
    user.role = "student";
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}


