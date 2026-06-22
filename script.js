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
const foundPerson = document.getElementById("foundPerson");
const allHaveJob = document.getElementById("allHaveJob");

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
  style();
});

// close modal box
overlay.addEventListener("click", () => {
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
});
// found with email
foundPerson.addEventListener("click", () => {
  const writeEmail = prompt("write email for found : ");
  const usersfilter = users.filter((p) => {
    return p.email === writeEmail.trim();
  });
  if (usersfilter.length > 0) {
    let res = `<h3>congratulation! user found✅</h3>`;

    usersfilter.forEach((person) => {
      const { name, email, job, phoneNumber, gender } = person;

      res += `
      <p>name : ${name}</p>
      <p>email : ${email}</p>
      <p>job : ${job}</p>
      <p>phoneNumber : ${phoneNumber}</p>
      <p>gender : ${gender}</p>
      <hr>
      `;
      modal.innerHTML = res;
    });
  } else {
    modal.innerHTML = `<h2>Unfortunately there is no user❌</h2>`;
  }

  style();
});
//Is everyone employed
allHaveJob.addEventListener("click", () => {
  if (users.length === 0) {
    modal.innerHTML = `<h3>Registration not yet completed</h3>`;
    return;
  }
  const hasJob = users.every((p) => p.job.trim() !== "");
  modal.innerHTML = hasJob
    ? "everybody has job✅"
    : "somebody does'nt have job❌";

  style();
});
// Is there at least one man?
mans.addEventListener("click", () => {
  const mans = users.some((p) => p.gender === "man");
  modalInput.innerHTML = mans
    ? "<p>At least one person is male✅</p>"
    : "<p>Not even one person is a man❌</p>";
  style();
});
function style() {
  overlay.style.opacity = "1";
  overlay.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
}
