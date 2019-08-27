'use strict';

// Newsletter form validation
function validateFormIsEmpty()
{
    if(document.getElementById("firstNameInput").value == null
        || document.getElementById("lastNameInput").value == ""
        || document.getElementById("emailInput").value == ""
    )

    {
        alert("The fields can not be empty! Please fill in your details.");
        document.getElementById("firstNameInput").focus();
        return false;
    }
}

// Back to top button
document.getElementsByClassName('back-to-top')[0].onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}