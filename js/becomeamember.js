const elSignup = document.querySelector('#signup');
const elName = document.querySelector('#name');
const elEmail = document.querySelector('#email');
const elAgecheck = document.querySelector('#agecheck');
const elFavouriteDrink = document.querySelector('#favouritedrink');
const elSubscribe = document.querySelector('#subscribe'); //checkedbox
let elOutput = document.querySelector('#output');

function becomeMember(event) {
    let name = elName.value;
    let ageCheck = elAgecheck.options[elAgecheck.selectedIndex].value;

    if (name.length < 2) {
        elOutput.textContent = 'Your name must contain at least 2 letters.';
    } else if (ageCheck === 'no') {
        elOutput.textContent = 'You must be at least 18 years old yo become a member.';
    } else {
        elOutput.textContent = fullMember(name, ageCheck);
    }
    event.preventDefault();
}

function fullMember(fullName, confirmAge) {
    let email = elEmail.value;
    confirmAge = 'You are 18 years old or older.'
    let favouriteDrink = elFavouriteDrink.value;
    let output = '';

    output = 'Thank you and welcome ' + fullName + '!' + ' We have recieved the following information: ' + 'Your name is ' + fullName + '.' + ' Your email is ' + email + '. ' + confirmAge + ' And your favourite drink is ' + favouriteDrink + '.';

    return output;
}

elSignup.addEventListener('submit', becomeMember, false);
