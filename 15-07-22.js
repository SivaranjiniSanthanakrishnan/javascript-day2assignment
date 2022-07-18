let allUsers = [];
const populateData = async () => {
  const response = await fetch(
    "https://61fcdb8ff62e220017ce41c1.mockapi.io/users"
  );
  const data = await response.json();
  allUsers = data;
  let tbody = document.querySelector(".tablebody");

  allUsers.forEach((obj) => {
    let tr = document.createElement("tr");
    Object.keys(obj).forEach((key) => {
      let td = document.createElement("td");
      if (key === "courses") {
        let ul = document.createElement("ul");
        obj[key].map((course) => {
          let li = document.createElement("li");
          li.innerText = course;
          ul.append(li);
        });
        td.append(ul);
      } else {
        td.innerText = obj[key];
      }
      tr.append(td);
    });

    let tdActions = document.createElement("td");
    tdActions.innerHTML = `<button ><i data-action="edit" data-id="${obj.id}" id="edit-${obj.id}" class="fa fa-pencil"></i></button>
                                <button ><i data-action="delete" data-id="${obj.id}" id="delete-${obj.id}" class="fa fa-trash-o"></i></button>`;
    tr.append(tdActions);

    tbody.append(tr);
  });
};

document.addEventListener("DOMContentLoaded", populateData);

document.querySelector("#userForm").addEventListener("submit", submitData);

async function submitData(evt) {
  evt.preventDefault();
  let coursesArr = [];
  if (document.querySelector("#HTML").checked)
    coursesArr.push(document.querySelector("#HTML").value);
  if (document.querySelector("#CSS").checked)
    coursesArr.push(document.querySelector("#CSS").value);
  if (document.querySelector("#javascript").checked)
    coursesArr.push(document.querySelector("#javascript").value);
  let formData = {
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
    email: document.querySelector("#email").value,
    courses: coursesArr,
  };
  let id = document.querySelector("#id").value;
  if (id) {
    // update
    console.log("Update");
    await fetch(`https://61fcdb8ff62e220017ce41c1.mockapi.io/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
  } else {
    // create
    console.log("Create");
    await fetch("https://61fcdb8ff62e220017ce41c1.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
  }

  location.reload();
}

document
  .querySelector("#userTable")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    //   console.log(e.target.getAttribute("data-id"));
    let selectedData = allUsers.filter(
      (data) => data.id === e.target.getAttribute("data-id")
    )[0];
    console.log(selectedData);
    if (e.target.getAttribute("data-action") === "edit") {
      document.querySelector("#name").value = selectedData.name;
      document.querySelector("#email").value = selectedData.email;
      document.querySelector("#age").value = selectedData.age;
      document.querySelector("#id").value = selectedData.id;

      document.querySelector("#HTML").checked = false;
      document.querySelector("#CSS").checked = false;
      document.querySelector("#javascript").checked = false;

      selectedData.courses.map((c) => {
        document.querySelector(`#${c}`).checked = true;
      });
    } else if (e.target.getAttribute("data-action") === "delete") {
      await fetch(
        `https://61fcdb8ff62e220017ce41c1.mockapi.io/users/${e.target.getAttribute(
          "data-id"
        )}`,
        {
          method: "DELETE",
        }
      );
      location.reload();
    }
  });
