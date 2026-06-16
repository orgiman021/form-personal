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
// show user info in modal box
showModal.addEventListener("click", () => {
  if (users.length === 0) {
    modal.innerHTML = `<h3>Registration not yet completed</h3>`;
  } else {
    modal.innerHTML = `<h3>users list : </h3>`;
    const list = document.createElement("ul");

    users.forEach((persons, index) => {
      const li = document.createElement("li");
      const { name, email, job, phoneNumber, gender } = persons;
      li.innerText = `${index + 1}
        name : ${persons.name}
        email : ${persons.email}
        job : ${persons.job || "---"}
        phone number : ${persons.phoneNumber || "---"}
        gender : ${persons.gender || "---"}`;
      list.appendChild(li);
    });
    modal.appendChild(list);
  }
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
});

  // close modal box
  overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
  });
