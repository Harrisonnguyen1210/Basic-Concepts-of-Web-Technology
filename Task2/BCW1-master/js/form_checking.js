let firstName = document.forms['myForm']['first name'];
let lastName = document.forms['myForm']['last name'];
let email = document.forms['myForm']['email'];
let phone = document.forms['myForm']['phone'];
let postalCode = document.forms['myForm']['postal code'];
let password = document.forms['myForm']['password'];

function validateForm() {
    if (firstName.value === '') {
        firstName.focus();
        alert('Name must be filled out');
        return false;
    }
    if (lastName.value === '') {
        lastName.focus();
        alert('Last name must be filled out');
        return false;
    }
    const emailPatt = new RegExp('@');
    if (email.value === '') {
        email.focus();
        alert('Email must be filled out');
        return false;
    } else if (!emailPatt.test(email.value)) {
        email.focus();
        alert('Email must contain @');
        return false;
    }
    if (password.value === '') {
        password.focus();
        alert('Password must be filled out');
        return false;
    }
    const postCodePatt = /^[0-9]*$/;
    if (postalCode.value !== '') {
        if (!postCodePatt.test(postalCode.value) || postalCode.value.length !== 5) {
            postalCode.focus();
            alert('Wrong syntax for postal code \nPostal code must have only 5 numbers');
            return false;
        }
    }
    const phonePatt = /(?:\+?3584|0)([0-9]){8}/;
    if (!phonePatt.test(phone.value)) {
        phone.focus();
        alert('Phone number should follow pattern: +358401234567');
        return false;
    }
}