const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', function () {
    const letters = /^[A-Za-z]+$/;
    if (input.value.match(letters)) {
        alert('Mantap')
        return true
    }
    else {
        alert('gagal')
        return false
    }
})