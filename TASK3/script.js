document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    onFormSubmit();
});

function onFormSubmit() {
    var formData = readFormData();
    insertNew(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["femail"] = document.getElementById("femail").value;
    formData["fwebsite"] = document.getElementById("fwebsite").value;
    formData["fileupload"] = document.getElementById("fileupload").value;
    formData["fcourse"] = document.getElementById("fcourse").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
    formData["skills"] = [];
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    for (var i = 0; i < skills.length; i++) {
        formData["skills"].push(skills[i].value);
    }
    return formData;
}

function insertNew(data) {
    var table = document.getElementById("ulist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cel1 = newRow.insertCell(0);
    cel1.textContent = data.fname;
    var cel2 = newRow.insertCell(1);
    cel2.textContent = data.femail;
    var cel3 = newRow.insertCell(2);
    cel3.textContent = data.fcourse;
    var cel4 = newRow.insertCell(3);
    cel4.textContent = data.gender;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("femail").value = "";
    document.getElementById("fwebsite").value = "";
    document.getElementById("fileupload").value = "";
    document.getElementById("fcourse").value = "";
    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }
    var skillsCheckboxes = document.getElementsByName("skills");
    for (var i = 0; i < skillsCheckboxes.length; i++) {
        skillsCheckboxes[i].checked = false;
    }
}
