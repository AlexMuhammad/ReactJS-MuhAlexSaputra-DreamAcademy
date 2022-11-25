let tBody = document.querySelector('tbody')
let btnAdd = document.querySelector('#btn-add')
let form = document.querySelector('#form-wrapper');
let editId = document.querySelector('#edit-change')
let save = document.querySelector('#save');
let check = document.querySelector("#publishCheck")
let titleInput = document.querySelector('#titleInput');
let bodyInput = document.querySelector('#bodyInput');

const BASE_URL = "http://localhost:3000/"
let dataCenter = [];
let method = null
let id = null
btnAdd.addEventListener('click', function () {
    method = "POST"
});

cancel.addEventListener('click', function () {

})

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
    let tableData = ''

    if (dataCenter.length > 0) {
        for (let i = 0; i < dataCenter.length; i++) {
            // dataCenter[i].Date = new Date().toLocaleDateString().split('/').join('-');
            tableData += `
            <tr id=${i + 1}>
                <td>${[i + 1]}</td>
                <td>${dataCenter[i]['title']}</td>
                <td>${dataCenter[i]['authorId']}</td>
                <td>${dataCenter[i]['createdAt']}</td>
                <td>${dataCenter[i]['lastModified']}</td>
                <td>${dataCenter[i]['publishedStatus'] == true ? '<i class="bi bi-check-circle-fill"></i>' : '<i class="bi bi-x-circle-fill"></i>'}</td>
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
                lastModified: new Date().getTime(),
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
                authorId: user.value,
                createdAt: new Date().getTime(),
                lastModified: new Date().getTime(),
                publishedStatus: form['publishCheck'].checked
            })
        });
        window.location.reload()
    }
})

async function editData(id) {
    // console.log(id);
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
    const response = await fetch(BASE_URL + "posts/" + id, {
        method: "DELETE",
    })
    window.location.reload()
    // console.log(id);
}