let allUsers = []
const populateData = async ()=> {
    const response = await fetch('https://61fcdb8ff62e220017ce41c1.mockapi.io/users');
    const data = await response.json();
    allUsers = data;
    let tbody = document.querySelector(".tablebody");

    allUsers.forEach((obj)=>{
        let tr = document.createElement("tr");
        Object.keys(obj).forEach((key)=>{
            let td = document.createElement("td");
            if(key === "courses") {
                let ul = document.createElement("ul");
                obj[key].map(course => {
                    let li = document.createElement("li");
                    li.innerText = course;
                    ul.append(li)
                })
                td.append(ul)
            } else {
                td.innerText = obj[key]
            }
            tr.append(td)
        })

        let tdActions = document.createElement("td");
        tdActions.innerHTML = `<button id="edit-${obj.id}" data-action="edit" data-id="${obj.id}"><i class="fa fa-pencil"></i></button>
                                <button id="delete-${obj.id}" data-action="delete" data-id="${obj.id}"><i class="fa fa-trash-o"></i></button>`;
        tr.append(tdActions);

        tbody.append(tr);
    })
}

document.addEventListener('DOMContentLoaded', populateData);


