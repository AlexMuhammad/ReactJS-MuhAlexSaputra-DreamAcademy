let tBody = document.querySelector('tbody')
let btnAdd = document.querySelector('#btn-add')
let form = document.querySelector('#form-wrapper');
let editId = document.querySelector('#edit-change')
let save = document.querySelector('#save');
let check = document.querySelector("#publishCheck")
let titleInput = document.querySelector('#titleInput');
let bodyInput = document.querySelector('#bodyInput');
let selectUser = document.getElementById("selectUser");

const BASE_URL = "http://localhost:3000/"
let dataCenter = [];

async function getUrl(){
   const res = await fetch(`${BASE_URL}posts/`)
   const data = await res.json()
   return data
}

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

async function getData() {
    const response = await fetch(BASE_URL + "posts");
    if (!response.ok) {
        const message = `Error ${response.status}`
        throw new Error(message)
    }
    const responseJson = await response.json();
    return responseJson;
}
getData().then((data) => {
    // console.log(data);
    dataCenter = data
    updateData()
})

getData()

async function updateData() {
    const arr = await getUrl();
    const res = await fetch(`${BASE_URL}users/`)
    const data = await res.json()
    arr.map(async (el) => {
        function fc(val) {
            return val.id == el.authorId
        }
        const users = data.find(fc)
        let tableData = ''
    
        if (dataCenter.length > 0) {
            for (let i = 0; i < dataCenter.length; i++) {
                dataCenter[i].Date = new Date().toLocaleDateString().split('/').join('-');
                tableData += `
                <tr id=${i + 1}>
                    <td>${[i + 1]}</td>
                    <td><a href="/post/?id=${dataCenter[i]['id']}">${dataCenter[i]['title']}</a></td>
                    <td>${dataCenter[i].username}</td>
                    <td>${dataCenter[i].createdAt}</td>
                    <td>${dataCenter[i].lastModified}</td>
                    <td>${dataCenter[i].publishedStatus == true ? '<i class="bi bi-check-circle-fill"></i>' : '<i class="bi bi-x-circle-fill"></i>'}</td>
                    <td><button type="button"
                    class="btn btn-danger" onclick="deleteData(${dataCenter[i]['id']})"> Delete </button>
                    <button type="button"
                    class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editData(${dataCenter[i]['id']})"> Edit </button>
                    </td>
                </tr>
                `
            }
            tBody.innerHTML = tableData;
        }
    })
    // const data = await res.json()
}

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    let user = document.querySelector('#select-user');
    if (editId.innerHTML) {
        await fetch(BASE_URL + "posts/" + editId.innerHTML, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: form['titleInput'].value,
                body: form['bodyInput'].value,
                lastModified: new Date().toLocaleString(),
                publishedStatus: form['publishCheck'].checked
            })
        });
        window.location.reload()
    } else {
        await fetch(BASE_URL + "posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: form['titleInput'].value,
                body: form['bodyInput'].value,
                authorId: selectUser.value,
                createdAt: new Date().toLocaleString("en-US").split('/').join('-'),
                lastModified: new Date().toLocaleString("en-US").split('/').join('-'),
                publishedStatus: form['publishCheck'].checked
            })
        });
        window.location.reload()
    }
})

async function editData(id) {
    try {
        const response = await fetch(BASE_URL + "posts/" + id)
        const responseJson = await response.json()
        editId.innerHTML = responseJson.id
        titleInput.value = responseJson.title;
        bodyInput.value = responseJson.body;
        publishCheck.checked = responseJson.publishedStatus;
    } catch (err) {
        console.log(err);
    }
}

async function deleteData(id) {
    await fetch(BASE_URL + "posts/" + id, {
        method: "DELETE",
    })
    window.location.reload()
}