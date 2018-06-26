window.onload = function () {
    showAll();
    deleteContact();
    updateContact();
}
function dummy()
{
}

function add() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobNum").value;
    var mail = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("addressTextArea").value;
    var state = document.getElementById("slist").value;
    let myObj = { Mobile_Number: mobile, EMail_id: mail, DateOfBirth: dob, Address: address, State: state };
    localStorage.setItem(name, JSON.stringify(myObj));
    location.reload();
}
function showAll() {
    var keyValue = "";
    var rowNo = 0;
    for (i = 0; i < localStorage.length; i++) {
        keyValue = localStorage.key(i);
        var obj = localStorage.getItem(keyValue);
        var data = JSON.parse(obj);
        var table = document.getElementById("contactTable");
        var row = table.insertRow(rowNo + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        cell1.innerHTML = keyValue;
        cell2.innerHTML = data.Mobile_Number;
        cell3.innerHTML = data.EMail_id;
        cell4.innerHTML = data.DateOfBirth;
        cell5.innerHTML = data.Address;
        cell6.innerHTML = data.State;
        cell7.innerHTML='<input type="button" class="delete" id=' + keyValue + '>';
        cell8.innerHTML = '<input type="button" class="update" id=' + keyValue + '>';
    }
}
function deleteContact() {
    var deleteButton = document.getElementsByClassName('delete');
    for (var j = 0; j < deleteButton.length; j++) {
        deleteButton[j].addEventListener('click', function () {
            localStorage.removeItem(this.id);
            location.reload();
        });
    }
}
function updateContact() {
    var updateButton = document.getElementsByClassName('update');
    for (var j = 0; j < updateButton.length; j++) {
        updateButton[j].addEventListener('click', function () {
            var obj = localStorage.getItem(this.id);
            localStorage.removeItem(this.id);
            var data = JSON.parse(obj);
            document.getElementById("name").value = this.id;
            document.getElementById("mobNum").value = data.Mobile_Number;
            document.getElementById("email").value = data.EMail_id;
            document.getElementById("dob").value = data.DateOfBirth;
            document.getElementById("addressTextArea").value = data.Address;
            document.getElementById("slist").value = data.State;
        });
    }
}
function validate() {
    var validationError = 0;
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobNum").value;
    if (name == "" || mobile == "") {
        alert("Enter the mandatory fields")
        validationError += 1;
    }
    else if (mobile.length < 10) {
        alert("Enter a proper mobile number")
        validationError += 1;
    }
    if (validationError == 0) {
        add();
    }
}
