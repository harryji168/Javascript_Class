const fetchButton = document.querySelector("#fetch-button");

fetchButton.addEventListener('click', event => {
    // 1. XMLHttpRequest
    // to use this, we need to create an instance of it
    const xhrStudents = new XMLHttpRequest();

    xhrStudents.open("GET", "http://localhost:3000/students")

})