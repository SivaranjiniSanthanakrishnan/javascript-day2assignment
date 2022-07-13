
function eventTriggered(textBox) {
    console.log(`Event is triggered. Value is ${textBox.value}`)
}

function eventTriggered1(event) {
    console.log(event.target)
    console.log(`Event is triggered. Value is ${event.target.value}`);
}

function formSubmit(event) {
    event.preventDefault();
    if(document.getElementById("name").value === "") {
        document.getElementById("nameErr").innerText="Name is Required"
    } else {
        document.getElementById("nameErr").innerText=""
    }
    if(document.getElementById("email").value === "") {
        document.getElementById("emailErr").innerText="Email is Required"
    } else {
        document.getElementById("emailErr").innerText=""
    }
    console.log(document.getElementById("name").value, 
                document.getElementById("email").value)
}

document.getElementById("addCourse").addEventListener("click", ()=>{
    const ul = document.getElementById("list1");
    const list = document.createElement("li");
    list.innerText = document.getElementById("courseName").value;
    ul.appendChild(list);
    document.getElementById("courseName").value = "";
})

function removeCourse(value) {
    console.log(value)
    let ul = document.getElementById("list1");
    let last_li = ul.lastElementChild;
    last_li.remove();
}

function addrow() {
    let tableElement = document.getElementById("table1");
    let row = tableElement.insertRow();
    let td1 = row.insertCell();
    td1.innerText = "CCC"
    let td2 = row.insertCell();
    td2.innerText = "30"
}

function deleterow(){
    document.getElementById("table1").deleteRow(-1)
}

const form = document.createElement("form")
const div = document.createElement("div");


const label = document.createElement("label")
label.innerHTML = "<b> Name </b> : "

const inputText = document.createElement("INPUT");
inputText.setAttribute("type", "text");

div.append(label, inputText)
form.append(div);
document.body.append(form);