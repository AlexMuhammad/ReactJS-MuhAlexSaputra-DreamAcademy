let BASE_URL = "http://localhost:3000/";
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let dateCreated = document.getElementById('createdAt')
let bodyInput = document.querySelector("#body-input");
let form = document.querySelector("#add-comment");
const commentBody = document.getElementById("commentBody");
const commentInput = document.getElementById("commentInput");
const commentSubmit = document.getElementById("commentSubmit");
const selectUser = document.getElementById("selectUser");

const createdAt = new Intl.DateTimeFormat("en-GB", {
  timeStyle: "medium",
  dateStyle: "short",
});

const urlParams = new URLSearchParams(window.location.search);
const myParams = urlParams.get("id");

let dataCenter = [];
let users;

async function getUser() {
  const response = await fetch(`${BASE_URL}users`);
  const data = await response.json();

  users = data;

  const option = data
    .map(function (val) {
      return `<option value=${val.id}>${val.username}</option>`;
    })
    .join("");

  selectUser.innerHTML = option;
}
getUser();

async function getData(id) {
  console.log(id);
  const response = await fetch(BASE_URL + "posts/" + myParams);
  if (!response.ok) {
    const message = `Error ${response.status}`;
    throw new Error(message);
  }
  const responseJson = await response.json();
  return responseJson;
}
getData(myParams).then((data) => {
  console.log(data.body);
  dataCenter = data;
  title.innerHTML = data.title;
  author.innerHTML = data.authorId;
  dateCreated.innerHTML = data.createdAt;
  bodyInput.innerHTML = data.body;
});

async function getUrlComment() {
  const response = await fetch(`${BASE_URL}comments?id=${myParams}`);
  const data = response.json();
  return data;
}

async function getComment() {
  const data = await getUrlComment();
  data.map(async (element) => {
    const response = await fetch(`${BASE_URL}users/` + element.userId);
      const data = await response.json();

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="d-flex flex-row align-items-center gap-3">
         <img src="${data.avatar}" class="rounded-circle" width="53px" height="50px">
         <div class="user-comment">
            <span>${data.username}</span>
                &nbsp; <b>|</b> &nbsp;
            <span>${element.createdAt}</span>
         </div>
      </div>
      <div>"${element.comment}"</div>
            `;
      commentBody.appendChild(div)
  });
}
getComment()

async function addComment() {
  await fetch(`${BASE_URL}comments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: selectUser.value,
      comment: commentInput.value,
      createdAt: createdAt.format(Date.now()).split(", ").join(" "),
      id: myParams,
    }),
  });
  window.location.reload();
}
commentSubmit.addEventListener("submit", () => addComment());
