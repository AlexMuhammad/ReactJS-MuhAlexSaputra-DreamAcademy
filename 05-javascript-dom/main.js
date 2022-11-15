const myForm = document.getElementById("myForm");
const inputData = document.getElementById("inputData");
const checkStatus = document.getElementById("checkStatus");
const table = document.getElementById("table-todo");
const tBody = document.getElementById("body-table");
let todo = JSON.parse(localStorage.getItem("todos")) || [];

function check() {
  if (checkStatus.checked) {
    return '<span style="color: green;">Done</span>';
  }
  return "<span style='color:red;'>Not Started</span>";
}

todo.map((val, i) => {
  const el = document.createElement("tr");
  Object.keys(val).map((arg) => {
    const td = document.createElement("td");
    if (arg == "id") {
      td.innerHTML = i + 1;
    } else {
      td.innerHTML = val[arg];
    }
    el.appendChild(td);
    console.log(el);
    check();
  });
  const td = document.createElement("td");
  td.innerHTML = `
      <button class="hapus" id="${val.id}">Delete</button>
      <button class="edit" id="${val.id}">Edit</button>
      `;
  el.appendChild(td);
  tBody.appendChild(el);
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  tBody.innerHTML = "";
  const data = {
    id: +new Date().getTime(),
    judul: inputData.value,
    status: (checkStatus.checked = check()),
  };
  todo.push(data);
  localStorage.setItem("todos", JSON.stringify(todo));
  inputData.value = "";
  location.reload();
});
const deleteBtn = document.querySelectorAll(".hapus");
Array.from(deleteBtn).map((arg) => {
  arg.addEventListener("click", (e) => {
    const newTodo = todo.filter((td) => {
      return td.id != e.target.id;
    });
    localStorage.setItem("todos", JSON.stringify(newTodo));
    location.reload();
  });
});

const editBtn = document.querySelectorAll('.edit');
Array.from(editBtn).map((arg) => {
    arg.addEventListener('click', (e) => {
    })
})