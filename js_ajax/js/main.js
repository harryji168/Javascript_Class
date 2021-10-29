const fetchButton = document.querySelector("#fetch-button");

fetchButton.addEventListener('click', event => {
    if (false) {
        //#region  1. XMLHttpRequest
        // to use this, we need to create an instance of it
        const xhrStudents = new XMLHttpRequest();

        xhrStudents.open("GET", "http://localhost:3000/students");
        // open method accepts two arguments, 
        // the first is to specify the http method => "GET", "POST", "DELETE", "PATCH"
        // the second is the url

        xhrStudents.onload = () => {
            // what are we going to do once we got the response
            console.log("Students: ", JSON.parse(xhrStudents.responseText));
        }

        xhrStudents.send();

        const xhrDepartments = new XMLHttpRequest();
        xhrDepartments.open("GET", "http://localhost:3000/departments");
        xhrDepartments.onload = () => {
            console.log("departments: ", JSON.parse(xhrDepartments.responseText));
        }
        xhrDepartments.send();
        //#endregion
    }

    $.ajax({
        url: "http://localhost:3000/students",
        success: (responseData) => {
            console.log("jQuery: ", responseData);
        }
    })

})