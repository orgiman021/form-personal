const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const mail = document.getElementById("mail");
const job = document.getElementById("job");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.getElementById("gender");
const showModal = document.getElementById("showModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

let users = [];
// add user
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const personsInfo = {
    name: `${firstName.value.trim()} ${lastName.value.trim()}`,
    email: mail.value.trim(),
    job: job.value.trim(),
    phoneNumber: phoneNumber.value.trim(),
    gender: gender.value.trim(),
  };
  if (!personsInfo.name || !personsInfo.email) {
    alert("Entering name and email is required ");
    return;
  }

  users.push(personsInfo);
  form.reset();
});
// show user info

