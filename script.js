
function flipCard(el) {
    el.classList.toggle('flip');
}
function saveSettings() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const patr = document.getElementById('patronymic').value;
    const dob = document.getElementById('dob').value;
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('patronymic', patr);
    localStorage.setItem('dob', dob);
    alert("Збережено!");
}
